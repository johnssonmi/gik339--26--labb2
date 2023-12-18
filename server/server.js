//Variabel express med värdet require
const express = require('express');
//variabel som gåller serverobjektet, tilldelas express
const server = express();
//skapar variabel som innehåller alla verktyg som finns i sqlite3
const sqlite3 = require('sqlite3').verbose();

//övergripande inställningar för servern med hjälp av server.use() (som copy paste från dokumentet)
server
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    next();
  });

//starta webbservern med listen() med en callback funktion för feedback
server.listen(3000, () => console.log('The server is now running'));

server.get('/users', (req, res) => {
  const db = new sqlite3.Database('./gik339-labb2.db'); //koppla till databasfilen
  const sql = 'SELECT * FROM users'; //hämta upp rader och kolumner från users

  //hämtar alla med callback funktion
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});
