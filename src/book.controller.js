const Book = require('./book.model');

module.exports = {
  index: async (request, handler) => {
    let books = Book.all();

    if (request.query.name) {
      books = books
        .filter((book) => book.name.toLowerCase().includes(request.query.name.toLowerCase()));
    }

    if (request.query.reading) {
      books = books.filter((book) => book.reading === Boolean(Number(request.query.reading)));
    }

    if (request.query.finished) {
      books = books.filter((book) => book.finished === Boolean(Number(request.query.finished)));
    }

    books = books.map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher,
    }));

    return handler
      .response({
        status: 'success',
        data: {
          books,
        },
      })
      .code(200);
  },
  show: async (request, handler) => {
    if (!request.params.bookId) {
      return handler
        .response({
          status: 'fail',
          message: 'bookId parameter tidak ditemukan',
        })
        .code(400);
    }

    const book = Book.find(request.params.bookId);

    if (!book) {
      return handler
        .response({
          status: 'fail',
          message: 'Buku tidak ditemukan',
        })
        .code(404);
    }

    return handler
      .response({
        status: 'success',
        data: { book },
      })
      .code(200);
  },
  store: async (request, handler) => {
    if (!request.payload.name) {
      return handler
        .response({
          status: 'fail',
          message: 'Gagal menambahkan buku. Mohon isi nama buku',
        })
        .code(400);
    }

    if (request.payload.readPage > request.payload.pageCount) {
      return handler
        .response({
          status: 'fail',
          message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    const book = Book.create(request.payload);

    return handler
      .response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: book.id,
        },
      })
      .code(201);
  },
  update: async (request, handler) => {
    const book = Book.find(request.params.bookId);

    if (!book) {
      return handler
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Id tidak ditemukan',
        })
        .code(404);
    }

    if (!request.payload.name) {
      return handler
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. Mohon isi nama buku',
        })
        .code(400);
    }

    if (request.payload.readPage > request.payload.pageCount) {
      return handler
        .response({
          status: 'fail',
          message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount',
        })
        .code(400);
    }

    Book.update(request.params.bookId, request.payload);

    return handler
      .response({
        status: 'success',
        message: 'Buku berhasil diperbarui',
      })
      .code(200);
  },
  remove: async (request, handler) => {
    const book = Book.find(request.params.bookId);

    if (book === undefined) {
      return handler
        .response({
          status: 'fail',
          message: 'Buku gagal dihapus. Id tidak ditemukan',
        })
        .code(404);
    }

    Book.delete(request.params.bookId);

    return handler
      .response({
        status: 'success',
        message: 'Buku berhasil dihapus',
      })
      .code(200);
  },
};
