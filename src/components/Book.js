import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  const chapterValue = Math.round(Math.random() * 10);

  return (
    <div className="Bookstore-CMS ">
      <div className="column1">
        <span className="category">Category</span>
        <h2>{title}</h2>
        <span className="authorCard">{author}</span>
        <div className="buttons">
          <button type="submit">Comments</button>
          <button onClick={handleSubmit} type="submit">Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="book-details">
        <div className="chartColumn">
          <div className="pie" style={{ '--p': 75, '--b': '10px', '--c': '#0290ff' }} />
          <div className="chartDescription">
            <p className="perc">
              {Math.round((chapterValue / 10) * 100)}
              %
            </p>
            <span className="status">Not completed</span>
          </div>
        </div>
        <div className="chapter-column">
          <h3>CURRENT CHAPTER</h3>
          <p>Chapter 12</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
