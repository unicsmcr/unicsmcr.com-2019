// Need to use default import, per https://github.com/netlify/netlify-lambda#debugging
const fetch = require('node-fetch').default;

const API_ENDPOINT =
  'https://graph.facebook.com/v4.0/unicsmanchester/events?fields=name%2Cstart_time%2Cend_time%2Cplace';

// eslint-disable-next-line no-unused-vars
exports.handler = async (event, _context) => {
  let response;
  const url = `${API_ENDPOINT}&access_token=${process.env.FB_ACCESS_TOKEN}`;
  try {
    response = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
  } catch (err) {
    console.log(err);
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }

  let results = await response.json();
  return {
    statusCode: results.error ? 400 : 200,
    body: JSON.stringify(results.data),
  };
};
