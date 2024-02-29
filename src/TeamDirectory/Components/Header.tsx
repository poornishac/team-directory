import React from "react";
import { HeaderLabel } from "../constants";
import Search from "./Search";

export interface ISearchHandler {
  searchValue: string;
  setSearchValue: Function;
}
const Header = ({ searchValue, setSearchValue }: ISearchHandler) => {
  return (
    <div
      style={{
        zIndex: 1,
        top: 0,
        width: "100%",
        height: "6.5rem",
        backgroundColor: "#88a4f4",
        position: "fixed",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          alignSelf: "center",
          marginLeft: "3.5rem",
          fontSize: "2.5rem",
          color: "white",
          fontWeight: 500,
        }}
      >
        {HeaderLabel.team}
      </div>
      <div
        style={{
          alignSelf: "center",
          marginRight: "3.5rem",
        }}
      >
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </div>
  );
};

export default Header;
