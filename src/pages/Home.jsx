import {Link} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
const Home = () => {
    return(
        <div className="home">
           <Link to="/stocks" element={<Dashboard />}>See stocks</Link>
        </div>
    )
}

export default Home;
