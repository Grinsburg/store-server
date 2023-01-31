const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = config.get('port');
const router = express.Router();
const controllers = require('./controllers');

require('../database/config');
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  }),
  bodyParser.json()
);

// app.use(passport.initialize());
app.use('/store/api', controllers);
// @ts-ignore
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => console.log(`App running on port: ${port}`));
