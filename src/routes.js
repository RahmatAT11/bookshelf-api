// eslint-disable-next-line no-unused-vars
const { addBookHandler } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
];

module.exports = routes;
