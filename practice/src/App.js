import React, { useState, useEffect } from "react";
import Button from "./details";
export function UserDetails(props) {
  return (
    <>
      <ul>
        <li> name :{props.name}</li>
        <li> email :{props.email}</li>
      </ul>
    </>
  );
}

export default function App() {
  return (
    <>
      {/* <FetchData /> */}
      <Button />
      {/* <UserDetails /> */}
      {/* <UserPic /> */}
    </>
  );
}

export function UserPic(props) {
  return (
    <>
      <img src={props.url} alt="avatar" />
    </>
  );
}
