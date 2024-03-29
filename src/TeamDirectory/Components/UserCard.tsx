import React, { useState } from "react";

import { UserCardLabel } from "../constants";

interface IUserCard {
  email: string;
  firstName: string;
  image: string;
  lastName: string;
}

const UserCard = ({ email, firstName, image, lastName }: IUserCard) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        width: "22rem",
        borderRadius: "1rem",
        boxShadow: "0.25rem 0.25rem 0.49rem 0.01rem #d9d4d4",
        transition: "transform 0.3s ease",
        backgroundColor: isHovered ? "#e8e6e6" : "transparent",
        transform: isHovered ? "translateY(-0.313rem)" : "translateY(0)",
        display: "flex",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        style={{
          borderRadius: "50%",
          width: "4.3rem",
          height: "4.3rem",
          alignSelf: "center",
          marginLeft: "8%",
        }}
        src={image}
        alt={UserCardLabel.userImg}
      />
      <div
        style={{
          margin: "6%",
          textAlign: "left",
          minWidth: "12.5rem",
          maxWidth: "18.75rem",
        }}
      >
        <div
          style={{
            fontSize: "1.5rem",
            color: "#424242",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontWeight: 500,
          }}
          dangerouslySetInnerHTML={{
            __html: `${firstName} ${lastName}`,
          }}
        ></div>
        <div
          style={{
            overflow: "hidden",
            fontSize: "smaller",
            textOverflow: "ellipsis",
            fontWeight: 500,
            color: "#acacac",
          }}
          dangerouslySetInnerHTML={{
            __html: `${email}`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default UserCard;
