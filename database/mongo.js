const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/stories');
// var Schema = mongoose.Schema;

let storySchema = mongoose.Schema({
  // TODO: your schema here!
  section: String,
  title: String,
  author: String,
  abstract: String,
  url: String,
  published: String,
  mediaUrl: String,
  mediaCaption: String,

});


let Story = mongoose.model('Story', storySchema);



let save = (toSaveData , cb) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  for (const entry of toSaveData) {
    var photo;
    if (entry.multimedia[4].url === undefined) {
      photo = 'photo not found';
    } else {
      photo = entry.multimedia[4].url;
    }
      let storyEntry = {
        section: entry.section,
        title: entry.title,
        author: entry.byline,
        abstract: entry.abstract,
        url: entry.url,
        published: entry.published_date,
        mediaUrl: photo,
        mediaCaption: entry.multimedia[3].caption
      };
      Story.findOneAndUpdate({abstract: entry.abstract}, storyEntry, {upsert: true}, (err,data) => {
        if (err) {
          cb(err, null);
        } else {
          cb(null, data);
        }
      });
    // }
  } 

};

let retrieve = (cb) => {
  Story.find({}).sort({'section': 1}).exec((err,data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null,data);
    }
  });
};

module.exports.retrieve = retrieve;
module.exports.save = save;