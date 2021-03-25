import React from "react";
import Profile from "./profile/Profile";

const App = () => {
  const handleName = (fullName) => {
    console.log(fullName);
    alert("Welcome" + fullName);
  };
  return (
    <div>
      <Profile
        fullName="yahya wael"     
        profession="Student"
        handleName={(fullName) => handleName(fullName)}
      >
        {/* children */}
        <img src="wael.jpg" alt="image" />
      </Profile>
    </div>
  );
};

export default App;
