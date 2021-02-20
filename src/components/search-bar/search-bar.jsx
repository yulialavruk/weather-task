import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../../redux/actions";
import "./search-bar.styles.css";

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    searchValue && dispatch(getCity(searchValue));
    setSearchValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Enter Search Text"
          value={searchValue}
          onChange={handleChange}
        />
        <button className="search-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
