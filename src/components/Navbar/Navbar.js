import "./Navbar.css";

function navBar() {
  return (
    <div className="nav-container">
      <div className='nav-logo'>
        <h1>Logo...</h1>
      </div>
      <div className='nav-menu'>
        <nav>
          <ul className='menu'>
            <li className='menu-item'>
              <a href='#'>Eric Nakagawa</a>
            </li>
            <li className='menu-item'>
              <a href='#'>916.527.4347</a>
            </li>
            <li className='menu-item'>
              <a href='#'>enakagawa21@gmail.com</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default navBar;
