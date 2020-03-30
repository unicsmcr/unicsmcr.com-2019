const sgMail = require('@sendgrid/mail');
const querystring = require('querystring');

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, _context) => {
  const { SENDGRID_API_KEY, UNICS_EMAIL } = process.env;
  sgMail.setApiKey(SENDGRID_API_KEY);

  let body = {};
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = querystring.parse(event.body);
  }

  const { email, name, content } = body;

  const msg = {
    to: UNICS_EMAIL, 
    from: email,
    subject: `${name}: ${email}`,
    html: content,
  };

  let response;
  try {
    response = await sgMail.send(msg, false);
  } catch (err) {
    console.log('Failed to send email');
  }

  return {
    statusCode: response[0].statusCode,
    body: '',
  };
};
