const axios = require('axios');
const express = require('express');
const { Pool } = require('pg')
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());

pg = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'node_test',
  user: 'postgres',
  password: '04022002',
})

pg.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

// for routes looking like this `/user?id=1`
app.get('/users', async (req, res) => {
  let response = await pg.query('SELECT * FROM "Users" join "Login" on "Users".id = "Login".id join "Picture" on "Login".id = "Picture".id')
  res.send(response.rows)
});

app.post('/user', async (req, res) => {
    let response = await axios.get('https://randomuser.me/api/')
    response = response.data.results[0]
    let name = response.name.title + ' ' + response.name.first + ' ' + response.name.last
    let request = await pg.query(`INSERT INTO "Users" (name, gender, email, cell, nat, dob, registered, phone) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
    [name, response.gender, response.email, response.cell, response.nat, response.dob.date, response.registered.date, response.phone]);
    let id = request.rows[0].id
    await pg.query(`INSERT INTO "Login" (id, uuid, username, password, salt, md5, sha1, sha256) values ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [id, response.login.uuid, response.login.username, response.login.password, response.login.salt, response.login.md5, response.login.sha1, response.login.sha256]);
    await pg.query(`INSERT INTO "Picture" (id, large, medium, thumbnail) values ($1, $2, $3, $4)`,
    [id, response.picture.large, response.picture.medium, response.picture.thumbnail])
    res.status(201).json({resulte: "created"})
});

app.listen(port, () => console.log(`App listening on port ${port}!`));