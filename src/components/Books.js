/* eslint-disable */ 
import { useSelector } from 'react-redux';
import Book from './Book';
import AddNewBook from './Newbook';

function Books() {
  const books = useSelector((state) => state.handleBook);
  return (
    <>
      <div className="book--container">
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </div>
      <AddNewBook />
    </>
  );
}

export default Books;
