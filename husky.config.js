module.exports = {
  hooks: {
    'pre-push': 'npm run test',
    'pre-commit': 'pretty-quick --staged',
  },
};
