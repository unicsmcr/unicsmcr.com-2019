// Need to use default import, per https://github.com/netlify/netlify-lambda#debugging
const fetch = require('node-fetch').default;
const sgMail = require('@sendgrid/mail');
const querystring = require('querystring');

const CAPTCHA_API_ENDPOINT = 'https://www.google.com/recaptcha/api/siteverify';

const failResponse = {
  statusCode: 500,
  body: 'Something went wrong!',
};

const sendEmail = async (msg) => {
  let response;
  try {
    response = await sgMail.send(msg, false);
  } catch (err) {
    return { ...failResponse, body: 'Failed to send email' + err };
  }

  return {
    statusCode: response[0].statusCode,
    body: 'Contact form submitted!',
  };
};

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, _context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
      headers: { Allow: 'POST' },
    };
  }

  const { SITE_RECAPTCHA_SECRET, SENDGRID_API_KEY, UNICS_EMAIL } = process.env;

  // Parse the request body
  let body = {};
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = querystring.parse(event.body);
  }
  const { email, name, content, 'g-recaptcha-response': captcha } = body;

  // Verify the captcha
  let response;
  try {
    response = await fetch(CAPTCHA_API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${SITE_RECAPTCHA_SECRET}&response=${captcha}`,
    });
  } catch (err) {
    return { ...failResponse, body: 'Failed to validate captcha' + err };
  }
  let a = await response.json();
  if (!a.success) {
    return { ...failResponse, body: 'Failed to extract response' };
  }

  // After recaptcha verification, send the email
  sgMail.setApiKey(SENDGRID_API_KEY);
  const msg = {
    to: UNICS_EMAIL,
    from: email,
    subject: `${name}: ${email}`,
    html: content,
  };
  return await sendEmail(msg);
};
