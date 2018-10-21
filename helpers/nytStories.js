const request = require('request');
const $ = require('jquery');
const config = require('../server/config.js');


const getStoriesByTopic = (topic, cb) => {
  console.log(topic);
  let url = `https://api.nytimes.com/svc/topstories/v2/${topic}.json`;
  // url += '?' +  config.KEY;
  const options = {
    url: url,
    qs: {
      'api-key': config.KEY
    },  
  };
  request.get(options, (err, res, body) => {
    if (err) {
      cb(err, null);
    } else {
      let parsedData = JSON.parse(body);
      cb(null, parsedData);
    }
  });

};


module.exports.getStoriesByTopic = getStoriesByTopic;


