import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/ books /books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handlesSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <div className="book--container">
      <h2>{title}</h2>
      <span>{author}</span>
      <button onClick={handlesSubmit} type="submit" id="submit">Remove</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
