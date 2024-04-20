import React, { useState, useEffect } from "react";
function App() {
  const [Breed, setBreed] = useState("random");
  const [Url, setUrl] = useState("");
  const handleChange = (e) => {
    setBreed(e.target.value);
  };
  let fetchdata = async () => {
    if (Breed !== "random") {
      const url = `https://dog.ceo/api/breed/${Breed}/images/random`;
      const response = await fetch(url);
      const data = await response.json();
      setUrl(data.message);
    } else {
      const url = `https://dog.ceo/api/breeds/image/random`;
      const response = await fetch(url);
      const data = await response.json();
      setUrl(data.message);
    }
  };
  const resetStateofDog = () => {
    fetchdata();
  };
  useEffect(() => {
    fetchdata();
  }, [Breed]);
  return (
    <>
      <p style={{ display: "inline" }}>Select the Breed:</p>
      <select onChange={handleChange}>
        <option value="random">Random</option>
        <option value="beagle">Beagle</option>
        <option value="boxer">Boxer</option>
        <option value="dalmatian">Dalmatian</option>
        <option value="husky">Husky</option>
      </select>
      <div>
        {/* <img src={Url} alt="dog-image" /> */}
        <img
          src={Url}
          aria-hidden
          alt="Picture of me taking a photo of an image"
        />
      </div>
      <button onClick={resetStateofDog}>Next</button>
    </>
  );
}

export default App;
