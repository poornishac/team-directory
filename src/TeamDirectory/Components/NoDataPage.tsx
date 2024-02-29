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
      <h2 style={{ fontSize: "24px", color: "#333" }}>{heading}</h2>
      <p style={{ fontSize: "18px", color: "#666" }}>{description}</p>
    </div>
  );
};

export default NoDataPage;
