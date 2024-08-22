import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInputComponent from "./components/UserInputComponent";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (identifier, value) => {
    setUserInput({ ...userInput, [identifier]: value });
  };

  const isInputValid = userInput.duration >= 1;

  return (
    <>
      <Header />
      <UserInputComponent onChange={handleChange} userInput={userInput} />
      {isInputValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please Enter Duration Greater than zero</p>
      )}
    </>
  );
}

export default App;
