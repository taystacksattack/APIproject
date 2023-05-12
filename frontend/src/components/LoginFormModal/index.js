import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const demoUser = () => {
    setCredential('Demo-licious')
    setPassword('password')
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
  }

  return (
    <>
    <div className = "LoginWrapper">
        <h1>Welcome Back!</h1>
        <form onSubmit={handleSubmit} className="Form">
          <label>
            {/* Username or Email */}
            <input
              placeholder="Username or Email"
              id ='UserName'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label>
            {/* Password */}
            <input
              placeholder="Password"
              id = 'Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.credential && (
            <p>{errors.credential}</p>
          )}
          <div id="ButtonWrapper">
            <button id="SubmitButton" onSubmit={e=>handleSubmit()}>Log In</button>
            <button id="DemoUser" onClick={e=> demoUser()}>Demo User</button>
          </div>

        </form>
      </div>
    </>
  );
}

export default LoginFormModal;
