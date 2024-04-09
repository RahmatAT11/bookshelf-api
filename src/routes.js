// eslint-disable-next-line no-unused-vars
const {
  addBookHandler,
  getAllBooksHandler,
  getBookById,
  editBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookById,
  },
];

module.exports = routes;
