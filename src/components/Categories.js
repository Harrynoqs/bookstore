/* eslint-disable */ 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const [messagePlaceholder, setMessage] = useState('');
  const dispatch = useDispatch();
  dispatch(checkStatus());
  const message = useSelector((state) => state.handleStatus);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(message);
  };
  return (
    <>
      <button
        onClick={handleSubmit}
        type="submit"
      >
        Check Status
      </button>
      <p>{ messagePlaceholder }</p>
    </>
  );
}

export default Categories;
