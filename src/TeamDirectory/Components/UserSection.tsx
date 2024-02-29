import { AxiosResponse } from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";

import { groupBy, sortObjectKeysByPriority } from "../../arrayUtils";
import { fetchUserDetails } from "../api";
import {
  getRole,
  wordMatcherRegEx,
  MyObject,
  NoDataPageLabel,
} from "../constants";
import { highlightSearchedMessage } from "../helpers";
import Loader from "./Loader";
import NoDataPage from "./NoDataPage";
import UserCard from "./UserCard";

const priorityObject = { admin: 1, member: 2 };

interface IUserSectionProps {
  searchValue: string;
}

interface IUserData {
  first_name: string;
  last_name: string;
  img: string;
  email: string;
  role: string;
}

const UserSection = ({ searchValue }: IUserSectionProps) => {
  const [showError, setShowError] = useState<boolean>(false);
  let userList = useRef<{ [key: string]: IUserData[] }>({});
  const [userData, setUserData] = useState<{ [key: string]: IUserData[] }>({});

  const [loader, setLoader] = useState<boolean>(false);

  const containsSearchTextIgnoreCase = (value: string) =>
    value.toLowerCase().includes(searchValue.toLowerCase());

  const onSearchChange = () => {
    let finalData = {};

    if (searchValue?.trim() === "") {
      setUserData(userList.current);
    } else {
      let users = JSON.parse(JSON.stringify(userList.current));
      Object.entries(users).map(([key, value]: any, index) => {
        let filteredUsers = value
          .map((user: IUserData) => {
            const userName = removeBoldTags(
              user.first_name + " " + user.last_name
            );
            const email = removeBoldTags(user.email);
            const isUserNameMatching = containsSearchTextIgnoreCase(userName);
            const isEmailMatching = containsSearchTextIgnoreCase(email);

            if (isUserNameMatching || isEmailMatching) {
              if (isUserNameMatching) {
                let data = highlightSearchedMessage(userName, searchValue);
                var matches = data.match(wordMatcherRegEx);
                [user.first_name, user.last_name] = matches ?? ["", ""];
              }
              if (isEmailMatching) {
                user.email = highlightSearchedMessage(email, searchValue);
              }
              return user;
            }
          })
          .filter((user: IUserData) => user !== undefined);

        if (filteredUsers.length > 0) {
          finalData = { ...finalData, [key]: filteredUsers };
        }
      });
      setUserData(finalData);
    }
  };

  const removeBoldTags = (value: string) => {
    return value?.replace(/<b>/g, "").replace(/<\/b>/g, "");
  };

  const successCallBack = (data: IUserData[]) => {
    const groupedData = groupBy(data, (data: any) => data?.role);
    const sortedUserData = sortObjectKeysByPriority(
      groupedData,
      priorityObject
    );

    userList.current = sortedUserData;
    setUserData(sortedUserData);
  };

  const getUserDetails = () => {
    setLoader(true);
    fetchUserDetails()
      .then((response: AxiosResponse<IUserData[], any>) => {
        if (Array.isArray(response?.data)) {
          successCallBack(response.data);
        } else {
          userList.current = {};
          setUserData({});
        }
      })
      .catch((err) => {
        setShowError(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    onSearchChange();
  }, [searchValue]);

  useEffect(() => {
    getUserDetails();
  }, []);

  const showHorizontalLine = (index: number) => {
    return index !== 0 ? (
      <hr style={{ margin: "3rem 0rem 3rem 0rem" }} />
    ) : (
      <></>
    );
  };

  const showRole = (key: string) => {
    return (
      <div
        style={{
          fontSize: "2.5rem",
          color: "grey",
          textAlign: "left",
          fontWeight: 500,
        }}
      >
        {getRole[key as keyof typeof getRole]}
      </div>
    );
  };

  const showUsers = (value: Array<MyObject>) => {
    return (
      <div
        key={`${value[0]}`}
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {value.map((item: any, index: number) => (
          <div
            key={index}
            style={{
              margin: "1.3rem",
              display: "flex",
            }}
          >
            <UserCard
              key={index}
              email={item.email}
              firstName={item.first_name}
              image={item.img}
              lastName={item.last_name}
            />
          </div>
        ))}
      </div>
    );
  };

  if (loader) {
    return <Loader />;
  }

  if (showError) {
    return <NoDataPage description={NoDataPageLabel.errorPage} />;
  }

  if (Object.keys(userData).length === 0) {
    return (
      <NoDataPage
        heading={NoDataPageLabel.noDataAvailable.heading}
        description={NoDataPageLabel.noDataAvailable.description}
      />
    );
  }
  return (
    <div style={{ margin: "3rem", position: "relative", top: "100px" }}>
      {Object.entries(userData).map(
        ([key, value], index) =>
          value.length > 0 && (
            <div key={key}>
              {showHorizontalLine(index)}
              {showRole(key)}
              {showUsers(value)}
            </div>
          )
      )}
    </div>
  );
};

export default UserSection;
