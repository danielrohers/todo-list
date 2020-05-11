const tasks = arr => arr.join(' && ');

module.exports = {

  hooks: {
    'pre-commit': tasks([
      'yarn lint'
    ]),

    'post-commit': tasks([
      'yarn outdated',
      'yarn audit'
    ])
  }

};
