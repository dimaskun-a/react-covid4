import StyledNavbar from "./Navbar.styled";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <nav>
          <div>
            <h1>Covid ID</h1>
          </div>
          <div>
            <ul>
              <li>
                <Link className="link" to="/">Global</Link>
              </li>
              <li>
                <Link className="link" to="/covid/indonesia">Indonesia</Link>
              </li>
              <li>
                <Link className="link" to="/covid/provinsi">Provinsi</Link>
              </li>
              <li>
                <Link className="link" to="/">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
