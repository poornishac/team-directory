import React, { useState } from "react";
import AddIcon from "./Components/AddIcon";
import Header from "./Components/Header";
import UserSection from "./Components/UserSection";

const Main = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <UserSection searchValue={searchValue} />
      <AddIcon />
    </div>
  );
};

export default Main;
