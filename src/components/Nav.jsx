import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
      <li>
          <Link to="/" className="Nav-link">
            <p>Homepage</p>
          </Link>
        </li>
        <li>
          <Link to="/articles" className="Nav-link">
            <p>Articles</p>
          </Link>
        </li>
        <li>
          <Link to="/categories" className="Nav-link">
            Comments
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
