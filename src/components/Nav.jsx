import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to={"/"}>
                <div>Stocks</div>
            </Link>
            <Link to={"/about"}>
                <div>About</div>
            </Link>
        </div>
    )
}

export default Nav;