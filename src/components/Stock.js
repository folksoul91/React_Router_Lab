const Stock = (props) => {
  const stock = props.stockData.filter(
    (data) => data.symbol === props.match.params.symbol
  )[0];
  return (
    <div>
      <h3>Name: {stock.name}</h3>
      <h3 className="price">Price: {stock.lastPrice}</h3>
    </div>
  );
};

export default Stock;
