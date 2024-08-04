import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <Link to="/"><h1>FAKE STORE</h1></Link>
            <nav>
                <NavLink to={"/products"}>PRODUCTS</NavLink>
                <NavLink to={"/contact"}>CONTACT</NavLink>
                <NavLink to={"/us"}>US</NavLink>
            </nav>
        </header>
    );
}
 
export default Header;