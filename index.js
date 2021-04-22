const express = require('express')
const app = express()
const port = 3000

var mysql = require('mysql');




  app.get('/', (req, res) => {
    var con = mysql.createConnection({
      host: "localhost",
      user: "test_connect",
      password: "Tuananh92!",
      database: "test_db_warehouse"
    });
    
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
    });

    con.query("CALL show_all_in_paper", function (err, result) {
      if (err) throw err;
      res.send(result);
      console.log(result);
    });
    con.end();
})






app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



  
  


