import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="nav-bar-logo">Bookstore CMS</Link>
      </div>
      <div className="nav--link">
        <Link to="/">Books</Link>
        <Link to="/categories">Categories</Link>
      </div>
    </nav>
  );
}

export default Header;
