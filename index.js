const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;
const __path = process.cwd();

require('events').EventEmitter.defaultMaxListeners = 500;

/* ---------- MIDDLEWARE FIRST ---------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* ---------- ROUTES ---------- */
const code = require('./pair');

app.use('/code', code);

app.get('/pair', (req, res) => {
  res.sendFile(path.join(__path, 'pair.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__path, 'main.html'));
});

/* ---------- HEROKU LISTENER ---------- */
app.listen(PORT, '0.0.0.0', () => {
  console.log(`
Don't Forget To Give Star ‼️
ᴘᴏᴡᴇʀᴇᴅ ʙʏ Rɪᴅᴢ Cᴏᴅᴇʀ
Server running on port ${PORT}
`);
});

module.exports = app;