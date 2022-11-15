import Book from './Book';
import AddNewBook from './Newbook';

function Books() {
  return (
    <>
      <div className="book--container">
        <Book title="Things fall apart" author="Harry NJuguna" />
      </div>
      <AddNewBook />
    </>
  );
}

export default Books;
