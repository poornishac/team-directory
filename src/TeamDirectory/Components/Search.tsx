import React from "react";
import { HeaderLabel } from "../constants";
import { debounce } from "../helpers";
import SearchIcon from "../Icons/SearchIcon";
import { ISearchHandler } from "./Header";

const Search = ({ searchValue, setSearchValue }: ISearchHandler) => {
  const handleInputChange = (event: any) => {
    debounce(setSearchValue(event?.target?.value), 10000);
  };

  return (
    <div>
      <div style={{ position: "relative" }}>
        <span
          style={{
            position: "absolute",
            transform: "translateY(43%) translateX(100%)",
          }}
        >
          <SearchIcon />
        </span>
        <input
          type="text"
          style={{
            borderRadius: "5rem",
            width: "26rem",
            border: 0,
            padding: "20px 20px 20px 55px",
            fontSize: "1.2rem",
            paddingLeft: "65px",
          }}
          placeholder={HeaderLabel.searchPlaceholder}
          value={searchValue}
          onChange={handleInputChange}
        ></input>
      </div>
    </div>
  );
};

export default Search;
