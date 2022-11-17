const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  id,
  title,
  author,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const initialState = [
  {
    id: 0,
    title: 'Book A',
    author: 'Author A',
  },
  {
    id: 1,
    title: 'Book B',
    author: 'Author B',
  }, {
    id: 2,
    title: 'Book C',
    author: 'Author C',
  },
];

const handleBook = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        id: action.id,
        title: action.title,
        author: action.author,
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default handleBook;
export { addBook, removeBook };
