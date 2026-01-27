import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/login",
      data
    );

    alert("Login Successful!");
    console.log(res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
