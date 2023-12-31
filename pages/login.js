import React, { useState ,useContext} from "react";
import { UserContext } from "../context";
import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [state,setState] = useContext(UserContext)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/login`,
        {
          email,
          password,
        }
      );
      setState({
        user : data.user,
        token : data.token
      })

      window.localStorage.setItem('auth',JSON.stringify(data));

      setLoading(false);
      console.log(data);
      toast.success("User Login Successfully");
      router.push("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  if(state && state.token) router.push('/')
  
  return (
    <Layout>
      <div className="row d-flex align-items-center justify-content-center mb-4">
        <div className="col-md-8">
          <h1 className="p-5 text-center">Login Page</h1>
          <form>
            <ToastContainer />
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
            <div className="d-flex flex-row">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-primary btn-lg"
                disabled={!email || !password}
              >
                {loading ? (
                  <>
                    <span>Loading &nbsp;</span>
                    <span
                      className="spinner-border spinner-border-sm"
                      aria-hidden="true"
                    ></span>
                  </>
                ) : (
                  "Login"
                )}
              </button>
              <p className="m-3">
                New User ? <Link href="/register">Register !</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default login;
