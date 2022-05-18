import { useParams } from "react-router-dom";
import stocks from "../components/stocks";
import { Link } from "react-router-dom";

const Stock = () => {
  const {symbol} = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);
    return (
        <div className="stock">
            <h1>{stock.name} ({stock.symbol})</h1>
            <h3>Last Price: ${stock.lastPrice}</h3>
            <h3>Change: {stock.change}</h3>
            <h3>High: ${stock.high}</h3>
            <h3>Low: ${stock.low}</h3>
            <h3>Open: ${stock.open}</h3>
        <Link to="/stocks">Back to stocks</Link>
        </div>
    )
}

export default Stock;