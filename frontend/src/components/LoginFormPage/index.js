import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './LoginForm.css'


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    <>
    <div className = "LoginWrapper">
        <h1>Log In</h1>
        <form onSubmit={handleSubmit} className="Form">
            <label id="UserName">
            Username or Email
            <input
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
            />
            </label>

            <label id="Password">
            Password
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </label>

            {errors.credential && <p>{errors.credential}</p>}
            <button id = "SubmitButton" type="submit">Log In</button>
        </form>
      </div>
    </>
  );
}

export default LoginFormPage;
