const Book = require('./book.model');

let bookId;

describe('Book Model', () => {
  test('should be able to find all books', () => {
    const books = Book.all();

    expect(books).toStrictEqual([]);
  });

  test('should be able to create a new book', async () => {
    const book = Book.create({
      name: 'Thinking Fast and Slow',
      pageCount: 172,
      readPage: 0,
    });

    bookId = book.id;

    expect(book.id).toBeDefined();
  });

  test('should be able to find a book by id', () => {
    const book = Book.find(bookId);

    expect(book.name).toBe('Thinking Fast and Slow');
  });

  test('should be able to update a book', () => {
    const book = Book.find(bookId);

    expect(book.name).toBe('Thinking Fast and Slow');

    const updatedBook = Book.update(bookId, {
      name: 'Thinking Fast and Slow (2nd Edition)',
    });

    expect(updatedBook.name).toBe('Thinking Fast and Slow (2nd Edition)');
  });

  test('should be able to delete a book', () => {
    const book = Book.delete(bookId);

    expect(book).toBe(null);
  });
});
