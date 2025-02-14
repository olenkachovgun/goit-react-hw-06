import React from "react";
import s from "./SearchBox.module.css";
import { CiSearch } from "react-icons/ci";

const SearchBox = ({ value, onChange }) => {
  console.log(value);
  return (
    <div className={s.searchBox}>
      <label htmlFor="name">Find contacts by name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={value}
        onChange={onChange}
        placeholder="Enter name"
      />
      <CiSearch className={s.iconSearch} />
    </div>
  );
};

export default SearchBox;
