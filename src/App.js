import stockData from "./components/data";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <Nav />
      <Main stockData={stockData} />
    </div>
  );
};

export default App;
