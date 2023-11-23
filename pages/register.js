import React, { useState } from "react";
import Layout from "../components/Layout";
import axios from "axios";
import {useRouter}from 'next/router'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8080/api/register", {
        name,
        email,
        password,
        answer,
      });
      toast.success("User Registered Successfully");
      router.push('/login')
    } catch (error) {
      toast.error(error.response.data)
    }
  };

  return (
    <Layout>
      <div className="row d-flex align-items-center justify-content-center mb-4">
        <div className="col-md-8">
          <h1 className="p-5 text-center">Register Page</h1>
          <form>
            <ToastContainer />
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control"
                id="exampleInputName1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <select
              className="form-select"
              defaultValue={"DEFAULT"}
              aria-label="Default select example"
            >
              <option value={"DEFAULT"}>Select Question</option>
              <option value={1}>Your Favorite Food Name ?</option>
              <option value={2}>Your Favorite Sports ?</option>
              <option value={3}>Your Best Friend Name ?</option>
            </select>
            <div className="mb-3">
              <input
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                type="text"
                placeholder="Answer Here"
                className="form-control"
                id="exampleInputAnswer1"
                aria-describedby="emailHelp"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default register;
