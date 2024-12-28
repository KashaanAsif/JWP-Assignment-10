import React from "react";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="rounded-rectangle">
        <div className="form-container">
          <h2>Signup</h2>
          <h4>
            Already have an account? <a href="blank">Login here</a>
          </h4>
          <form>
            <input type="text" placeholder="Enter your name here" required />
            <input
              type="email"
              placeholder="Enter your email id here"
              required
            />
            <input
              type="password"
              placeholder="Enter your password here"
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" />
              <label htmlFor="agreeToEmails">
                By signing up, you agree to receive emails about special offers.
              </label>
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>

        <img src="/src/assets/login.jpg" alt="Image failed to load" />
      </div>
    </div>
  );
}

export default App;
