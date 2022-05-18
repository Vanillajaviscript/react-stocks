import stocks from "../components/stocks.js";
import { Link } from "react-router-dom";

const Dashboard = () => {

    return (
        <div className="dashboard">
            {stocks.map(({name, symbol, lastPrice, change, high, low, open}) => {
            return (
               <Link key={symbol} to={`/price/${symbol}`}>
                   <h1>{name}</h1>
                   <h2>{symbol}</h2>
                    <table>
                        <tbody>
                            <tr>
                            <td>{lastPrice}</td>
                            <td>{change}</td>
                            <td>{high}</td>
                            <td>{low}</td>
                            <td>{open}</td>
                            </tr>
                        </tbody>
                    </table>
               </Link>
               )
            })}
        </div>
    )
}

export default Dashboard;
