// import "./styles.css";
import React, { useState, useEffect } from "react";

function Button(props) {
  return (
    <div
      onClick={async (e) => {
        props.user.value = e.target.innerHTML;
        // console.log(props);
        // return e.target.innerHTML;
        // let response = await fetch(
        //   `https://reqres.in/api/users/{props.user.value}`
        // );
        // console.log(response);
        // let { url } = response;
        // console.log(url);
        // let data = await response.json();
        // console.log(data);
      }}
    >
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>100</button>
    </div>
  );
}
function UserDetails(props) {
  return (
    <>
      <ul>
        <li>Email:{}</li>
        <li>Name: {}</li>
      </ul>
    </>
  );
}
function UserPic(props) {
  return (
    <>
      <img
        src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
        alt="avatar"
      />
    </>
  );
}

export default function App() {
  const [userdetails, setUserdetails] = useState({
    Email: "",
    Name: "",
    value: "1",
  });
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://reqres.in/api/users/{userdetails.value}`
      );
      console.log(userdetails);
      console.log(response);
    }
    fetchData();
  }, [userdetails]);
  return (
    <>
      {/* <FetchData /> */}
      <Button user={userdetails} />
      <UserDetails />
      <UserPic />
    </>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
