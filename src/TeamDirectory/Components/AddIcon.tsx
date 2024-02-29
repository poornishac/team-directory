import React from "react";
import { Add } from "../constants";

const AddIcon = () => {
  return (
    <button
      style={{
        justifyContent: "center",
        border: 0,
        position: "fixed",
        bottom: "1.25rem",
        right: "1.25rem",
        color: "white",
        borderRadius: "50%",
        height: "5rem",
        width: "5rem",
        boxShadow: "0 0.125rem 0.313rem rgba(0, 0, 0, 0.2)",
        backgroundColor: "#88a4f4",
        fontSize: "2.8rem",
      }}
    >
      {Add.addIcon}
    </button>
  );
};

export default AddIcon;
