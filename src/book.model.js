const { nanoid } = require('nanoid');
const data = require('./book.data');

const model = {
  id: '',
  name: '',
  year: 0,
  author: '',
  summary: 0,
  publisher: '',
  pageCount: 0,
  readPage: 0,
  reading: false,
  finished: false,
  insertedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

module.exports = {
  all: () => data,
  find: (bookId) => {
    const book = data.find((b) => b.id === bookId);

    return book;
  },
  create: (payload) => {
    const newBook = {
      ...model,
      ...payload,
      id: nanoid(),
      finished: payload.pageCount === payload.readPage,
    };

    data.push(newBook);

    return newBook;
  },
  update: (bookId, payload) => {
    const book = data.find((b) => b.id === bookId);

    const updatedBook = {
      ...book,
      ...payload,
      finished: payload.pageCount === payload.readPage,
      updatedAt: new Date().toISOString(),
    };

    const index = data.findIndex((b) => b.id === bookId);

    data[index] = updatedBook;

    return updatedBook;
  },
  delete: (bookId) => {
    const index = data.findIndex((b) => b.id === bookId);

    data.splice(index, 1);

    return null;
  },
};
