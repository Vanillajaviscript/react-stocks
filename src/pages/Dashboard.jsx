import stocks from "../data/stocks.js";
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="dashboard">
        <table>
            <tr>
                <th>Company Name</th>
                <th>Price</th>
                <th>Change</th>
                <th>High</th>
                <th>Low</th>
                <th>Open</th>
            </tr>
            {stocks.map(({name, symbol, lastPrice, change, high, low, open}) => {
            return (
            <tr>
                <td className="name">
                    <Link className="link" key={symbol} to={`/price/${symbol}`}>{name}</Link>
                </td>
                <td>${lastPrice}</td>
                <td>{change}</td>
                <td>${high}</td>
                <td>${low}</td>
                <td>${open}</td>
            </tr>
            )
            })}
        </table>
    </div>
    )
}

export default Dashboard;
