import { Link, useLocation } from 'react-router-dom';

// Component for navigation tabs
function NavTabs() {
  // Get the current page path using useLocation hook
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs justify-content-end">
      {/* Home tab */}
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Home
        </Link>
      </li>
      
      {/* Portfolio tab */}
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Portfolio
        </Link>
      </li>
      
      {/* Contact tab */}
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Contact
        </Link>
      </li>
      
      {/* Resume tab */}
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active text-primary' : 'nav-link text-dark'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;