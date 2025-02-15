import React from "react";
import s from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Enter name"
      />
      <CiSearch className={s.iconSearch} />
    </div>
  );
};

export default SearchBox;
