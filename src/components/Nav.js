import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/about">
                    <li className="li">About</li>
                </Link>
                <Link to="/shop">
                    <li className="li">Shop</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
