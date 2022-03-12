const BookController = require('./book.controller');

module.exports = [
  {
    method: 'GET',
    path: '/books',
    handler: BookController.index,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: BookController.show,
  },
  {
    method: 'POST',
    path: '/books',
    handler: BookController.store,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: BookController.update,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: BookController.remove,
  },
];
