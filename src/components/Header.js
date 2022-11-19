import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  return (
    <div id="navbar">
      <h1>Bookstore CMS</h1>
      <nav className="nav-links">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </nav>
      <span className="userProfile-container d-flex">
        <FaUserAlt style={{
          color: '#0290ff',
          height: '15px',
          cursor: 'pointer',
          transition: 'all ease-in 300ms',
        }}
        />
      </span>
    </div>
  );
}

export default Header;
