import { useSelector } from "react-redux";
import { SearchBar } from "./components/search-bar/search-bar";
import { VerticalBarChart } from "./components/bar-chart/bar-chart";
import "./App.css";

const App = () => {
  const state = useSelector((state) => state);
  return (
    <div className="App">
      <div className="container">
        <SearchBar />
        {state.isLoading && "...Loading"}
        {state.isError && "Not Found"}
        {state.city && <VerticalBarChart city={state.city} />}
      </div>
    </div>
  );
};

export default App;
