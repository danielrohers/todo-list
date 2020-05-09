require('dotenv').config();

const path = require('path');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const log = require('winston');
const cors = require('cors');
const env = require('./config/env');

const app = express();

app.use(helmet());
app.use(cors());
app.use(logger(env.logger));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'doc')));

require('./config/mongoose');
require('./config/routes')(app);

const { port } = env;

app.set('port', port);

app.listen(port, () => {
  log.info(`Listening on ${port}`);
});
