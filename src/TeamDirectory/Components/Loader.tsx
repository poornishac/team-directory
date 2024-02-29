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
          width: "3.125rem",
          height: "3.125rem",
          border: "0.313rem solid #f3f3f3",
          borderTop: "0.313rem solid #3498db",
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
