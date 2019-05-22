var express = require('express');
var cors = require('cors');
var randomstring = require('randomstring');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (rez, res) => {
  return res.send('h🌚e🌚l🌚l🌚o');
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  let sendOrNotToSend = Math.random() > 0.5;

  if (sendOrNotToSend) {
    console.log(`User with ${email} and ${password} successfully logged in.`);
    return res.status(200).send({
      ok: 'true',
      msg: 'welcome back, 🐻',
      token: randomstring.generate()
    });
  }

  console.log(`User with ${email} and ${password} tried to login.`);
  return res.status(401).send({ error: 'nope.' });
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  let sendOrNotToSend = Math.random() > 0.5;

  if (sendOrNotToSend) {
    console.log(`User with ${email} and ${password} registered successfully.`);
    return res.status(200).send({ ok: 'true', msg: 'welcome, 🐻' });
  }

  console.log(
    `User with ${email} and ${password} tried to register, but nope.`
  );
  return res.status(401).send({ error: 'nope.' });
});

app.listen(3005, () => {
  console.log('Server running on http://localhost:3005 🌚🌚🌚🌚');
});
