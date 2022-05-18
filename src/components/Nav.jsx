import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <Link to={"/"}>
                <div>Home</div>
            </Link>
            <img id="nav-image" src="https://scontent.fhio2-2.fna.fbcdn.net/v/t1.6435-9/81888984_110484563815767_5210019656189870080_n.jpg?_nc_cat=100&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=JCCkG6AC9VgAX9AycB6&tn=mkcUbDweFvqQRtdH&_nc_ht=scontent.fhio2-2.fna&oh=00_AT8S3HHizmYb9AJ7oX6VCPzbT5eUsMDxcvl6yrzU2d0ljQ&oe=62AB1C64" alt="wolf of wallstreet" />
            <Link to={"/about"}>
                <div>About</div>
            </Link>
        </div>
    )
}

export default Nav;