import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav">
            <Link to="/" className="title">Vatsalya</Link>
            <ul>
                <li>
                    <Link to="/">Homepage</Link>
                </li>
                <li>
                    <Link to="/events">Events</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;
