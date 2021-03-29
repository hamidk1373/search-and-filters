/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { profilesMock } from "../../mockData/profilesMock";
import Users from "./Users";

export default function Index() {
  // eslint-disable-next-line no-unused-vars
  const [profilesList, setProfilesList] = useState(profilesMock);
  const [filteredProfilesList, setFilteredProfilesList] = useState(
    profilesMock
  );

  const [infoInputValue, setInfoInputValue] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const handleChangeSearchInput = (event) => {
    setInfoInputValue(event.target.value);
  };

  useEffect(() => {
    let newFilteredList = profilesList;

    if (infoInputValue.length > 2) {
      newFilteredList = newFilteredList.filter((item) =>
        item.first_name.toLowerCase().includes(infoInputValue.toLowerCase())
      );
    }

    if (selectedGender) {
      newFilteredList = newFilteredList.filter(
        (item) => item.gender === selectedGender
      );
    }

    setFilteredProfilesList([...newFilteredList]);
  }, [selectedGender, infoInputValue]);

  return (
    <Users
      {...{
        infoInputValue,
        handleChangeSearchInput,
        selectedGender,
        setSelectedGender,
        filteredProfilesList,
      }}
    />
  );
}

// (x) => {
//
//  reutrn <div></div>
// }

// (x) => <div></div>
