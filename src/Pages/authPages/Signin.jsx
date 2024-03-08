import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  { toast, Toaster } from 'react-hot-toast';
import {useAuth } from "../../context/auth"


const Signin = () => {
  const Navigate = useNavigate();
  const [auth, setAuth] = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
      const res = await axios.post('http://localhost:8080/api/auth/signin', formData);

      setFormData({
        email: '',
        password: '',
      });

      if (res && res.data.success) {
        toast.success('Sign In successful!');
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem("auth", JSON.stringify(res.data));
        
        Navigate('/');
      } else {
        toast.error('Sign In failed. Please check your credentials.');
      }
    } catch (error) {
      console.log(error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Toaster />
      <div className="bg-[rgb(223,242,248)] rounded-xl my-10 w-[80%] ml-[10%]">
        <h2 className="text-center pt-5 text-xl font-bold ">Sign In</h2>
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
          <p className="text-sm cursor-pointer float-right mr-8">Forgot Password?</p>
          <button type="submit" className="w-[80%] ml-[10%] py-1 mb-10 mt-4 bg-green-700 rounded-full text-white font-semibold">
            SignIn
          </button>
        </form>
        <h4 className="py-5 text-sm text-center">
          Not Registered yet? <span className="font-semibold cursor-pointer">Register here</span>
        </h4>
      </div>
    </div>
  );
};

export default Signin;
