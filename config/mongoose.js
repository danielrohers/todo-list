const mongoose = require('mongoose');
const log = require('winston');
const env = require('./env');

if (env.node_env !== 'production') mongoose.set('debug', true);

mongoose
  .connect(env.mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    log.info('Connected to MongoDB');
  })
  .catch((err) => {
    log.error('Connection error:', err.message);
  });
