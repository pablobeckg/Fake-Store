import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
    return (
        <header>
            <a href="/"><h1>Fake Store</h1></a>
            <nav>
                <NavLink to={"/products"}>Products</NavLink>
            </nav>
        </header>
    );
}
 
export default Header;