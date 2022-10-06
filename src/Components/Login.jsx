import React, { useState } from 'react';
import Welcome from './Welcome';

import Userdetails from './Userdetails';

const Login = () => {
  constructor();
  {
    super();
    this.state = {
      name: 'users',
      users: [],
    };
  }
  componentWillMount();
  {
    Userdetails.all().then((users) => {
      console.log(users);
      this.setState({ users });
    });
  }
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getInputValue = (event) => {
    // show the user input value to console
    setData({ val: event.target.value });
  };

  // User Login info
  const database = this.state;

  const errors = {
    uname: 'invalid username',
    pass: 'invalid password',
    roleerror: 'invalid role',
  };

  const handleSubmit = (event) => {
    console.log(users);
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, role } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: 'pass', message: errors.pass });
      } else if (userData.role !== role.value) {
        // Invalid password
        setErrorMessages({ name: 'role', message: errors.roleerror });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: 'uname', message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage('pass')}
        </div>
        <div className="input-container">
          <label>role </label>
          <input
            type="text"
            id="role"
            onChange={getInputValue}
            name="role"
            required
          />
          {renderErrorMessage('roleerror')}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In </div>
        {isSubmitted ? (
          <div>
            {' '}
            <Welcome name={data.val} />
            {data.val} is successfully logged in
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
};
export default Login;
