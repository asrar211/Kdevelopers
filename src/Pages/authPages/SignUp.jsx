import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/signup', formData);

      setFormData({
        email: '',
        password: '',
        name: '',
        phone: ''
      });

      if (res && res.data.success) {
        Navigate('/signin');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-[rgb(223,242,248)] rounded-xl my-10 w-[80%] ml-[10%]">
        <h2 className="text-center pt-5 text-xl font-bold ">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="my-4 bg-[rgba(0,0,0,0.1)] w-[80%] ml-[10%] py-1 px-2 outline-none rounded-full"
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="mb-4 bg-[rgba(0,0,0,0.1)] w-[80%] ml-[10%] py-1 px-2 outline-none rounded-full"
            placeholder="Enter Password"
            required
          />
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="mb-4 bg-[rgba(0,0,0,0.1)] w-[80%] ml-[10%] py-1 px-2 outline-none rounded-full"
            placeholder="Enter Name"
            required
          />
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
            className="mb-2 bg-[rgba(0,0,0,0.1)] w-[80%] ml-[10%] py-1 px-2 outline-none rounded-full"
            placeholder="Enter Phone No."
            required
          />
          {/* <p className="text-sm cursor-pointer float-right mr-8">Forgot Password?</p> */}
          <button type="submit" className="w-[80%] ml-[10%] py-1 mb-10 mt-4 bg-green-700 rounded-full text-white font-semibold">
            SignUp
          </button>
        </form>
        <h4 className="py-5 text-sm text-center">
          Already Registered  <span className="font-semibold cursor-pointer">SignIn here</span>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
