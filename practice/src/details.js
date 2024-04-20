import React, { useState, useEffect } from "react";
import { UserPic, UserDetails } from "./App";
function Button() {
  let [color, setColor] = useState("1");
  let [Data, setData] = useState({
    email: "",
    name: "",
    url: "",
  });
  let fetchData = async () => {
    let url = "https://reqres.in/api/users/" + color;
    let response = await fetch(url);
    console.log(response);
    const data = response.json();
    console.log(data);
    return data;
  };
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);

      setData({
        ...Data,
        email: res.data.email,
        name: res.data.first_name + res.data.last_name,
        url: res.data.avatar,
      });
      console.log(Data);
    });
  }, [color]);

  return (
    <div
      onClick={(e) => {
        setColor(e.target.innerHTML);
      }}
    >
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>100</button>
      <div>
        <UserDetails name={Data.name} email={Data.email} />
      </div>
      <div>
        <UserPic url={Data.url} />
      </div>
    </div>
  );
}
export default Button;
