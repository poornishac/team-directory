import React from "react";
import NoDataFound from "../Icons/NoDataFound";

const NoDataPage = ({
  heading,
  description,
}: {
  heading?: string;
  description: string;
}) => {
  return (
    <div style={{ textAlign: "center", marginTop: "15%" }}>
      <NoDataFound />
      <h2 style={{ fontSize: "1.5rem", color: "#333" }}>{heading}</h2>
      <p style={{ fontSize: "1.125rem", color: "#666" }}>{description}</p>
    </div>
  );
};

export default NoDataPage;
