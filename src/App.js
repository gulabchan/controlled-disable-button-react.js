import React, { useState } from "react";

function DisableButton() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setButtonDisabled(event.target.value === "" || password === "");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setButtonDisabled(event.target.value === "" || username === "");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Welcome, ${username}!`);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>
        <div>
          <button type="submit" disabled={buttonDisabled}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default DisableButton;
