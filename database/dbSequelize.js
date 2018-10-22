const Sequelize = require('sequelize');


const db = new Sequelize('stories', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});



db
  .authenticate()
  .then(() => {
    console.log('connection to db successful!!!');
  })
  .catch(() => {
    console.log(err);
  })


let Story = db.define('Story', {
  storyId:  { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  section: Sequelize.STRING,
  title: { type: Sequelize.STRING, allowNull: false, unique: true },
  abstract: Sequelize.TEXT,
  url: Sequelize.STRING,
  published: Sequelize.STRING,
  mediaUrl: Sequelize.STRING,
  mediaCaption: Sequelize.STRING,
},
{
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

let Author = db.define('Author', {
  authorId:  { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
},
{
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});

let Section = db.define('Section', {
  id:  { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
  author_id: { type: Sequelize.INTEGER, allowNull: true},
  story_id: { type: Sequelize.INTEGER, allowNull: true}
},
{
  freezeTableName: true,
  createdAt: false,
  updatedAt: false
});


Author.belongsToMany(Story, {
  through: Section,
  foreignKey: 'story_id'
});
Story.belongsToMany(Author, {
  through: Section,
  foreignKey: 'author_id'
});


let save = (entry) => {
  return db.sync()
  
  .then(() => {
    return Promise.all([
      
      Author.create({
        name: entry.byline,
      }),
      Story.create({
        section: entry.section,
        title: entry.title,
        abstract: entry.abstract,
        url: entry.url,
        published: entry.published_date,
        mediaUrl: entry.multimedia[4].url,
        mediaCaption: entry.multimedia[4].caption
      }),
      Section.create({
      })
    ]).then(() => {
      // Author.addStory(Story, { through: { status: 'started' }});
    });
  })
  .then(()=> {
  
  })
  .catch((err) => {
    console.log(err);
  });
  

};


module.exports.save = save;
