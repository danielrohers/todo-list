const getEnv = (env) => process.env[env];

module.exports = {

  node_env: getEnv('NODE_ENV'),

  port: getEnv('PORT'),

  logger: getEnv('LOGGER'),

  mongo_uri: getEnv('MONGO_URL'),

  secretKey: getEnv('SECRET_KEY')

};
