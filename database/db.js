const mysql = require('mysql');



  dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'stories'
  });
  dbConnection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('connected to mysql!');
  });
  // dbConnection.query('select * from users ', callback);
  // dbConnection.end();