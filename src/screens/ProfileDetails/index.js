import React from "react";
import { useParams } from "react-router-dom";
import { profilesMock } from "../../mockData/profilesMock";

export default function ProfileDetails() {
  const { id } = useParams();

  const selectedUser = profilesMock.find((item) => item.id.toString() === id);

  // if (!selectedUser) {
  //   return <div style={{ color: "white" }}>User not found!!!</div>;
  // }

  return selectedUser ? (
    <div
      style={{ color: "white" }}
    >{`${selectedUser.first_name} ${selectedUser.last_name}`}</div>
  ) : (
    <div>User not found</div>
  );
}
