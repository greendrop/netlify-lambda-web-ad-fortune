exports.handler = async (event, context, callback) => {
  const axios = require('axios');
  const match = event.path.match(/^.*horoscope(.*)$/)
  const url = `http://api.jugemkey.jp/api/horoscope/free${match[1]}`;

  const response =
    await axios.get(url, { params: event.queryStringParameters })
      .then(response => {
        return {
          status: response.status,
          body: JSON.stringify(response.data)
        };
      })
      .catch(error => {
        return {
          status: error.response.status,
          body: JSON.stringify(error.response.data)
        };
      });

  callback(null, {
    statusCode: response.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: response.body
  });
}
