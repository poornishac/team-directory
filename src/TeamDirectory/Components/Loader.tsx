import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "5px solid #f3f3f3",
          borderTop: "5px solid #3498db",
          borderRadius: "50%",
          transform: "rotate(360deg)",
          animationName: "spin",
          animationDuration: "2s",
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      ></div>
    </div>
  );
};

export default Loader;
