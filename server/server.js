const express = require('express');
const bodyParser = require('body-parser');
const nytStories = require('../helpers/nytStories');
// const db = require('../database/mongo');
const db = require('../database/dbSequelize');

const app = express();

app.use(express.static(__dirname + '/../Client/dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
  res.send('HELLO WORLD');
});

app.post('/topics', (req, res) => {
  let topic = req.body.story;
  console.log(`${topic} got to server`);
  nytStories.getStoriesByTopic(topic, (err,data) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(data.results[0].multimedia[4].url, '<<<<<<< data from server');
      data.results.forEach(story => {
        db.save(story);
      });
          // if (err) {
          //   throw err;
          // } else {
          //   // console.log(data);
          //   // res.send(JSON.stringify(data));
          // }
        // });
    }
  });


  res.end()

});

app.get('/topics', (req, res) => {

  // db.retrieve((err,data) => {
  //   if (err) {
  //     console.log(err);
  //   }else {
  //     res.send(JSON.stringify(data));
  //   }
  // });
});

app.listen(3000, () => {
  console.log('listening on port 3000...');
});






