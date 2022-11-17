/* eslint-disable */ 
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

function AddNewBook() {
  const [inputs, setInputs] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();

  const handleInputs = (e) => {
    const input = e.target.value;

    switch (e.target.id) {
      case 'title':
        setInputs((inputs) => ({ ...inputs, title: input }));
        break;
      case 'author':
        setInputs((inputs) => ({ ...inputs, author: input }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(parseInt(uuidv4(), 10), inputs.title, inputs.author));
  };
  return (
    <form>
      <input
        id="title"
        onChange={handleInputs}
        placeholder="Book Title"
        value={inputs.title}
      />
      <input
        id="author"
        onChange={handleInputs}
        placeholder="Book Author"
        value={inputs.author}
      />
      <button onClick={handleSubmit} type="submit">ADD BOOK</button>
    </form>
  );
}

export default AddNewBook;
