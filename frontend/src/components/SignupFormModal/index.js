import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  useEffect(()=>{
    !email || !username || !firstName || !lastName || !password || !confirmPassword ? setDisabled(true) :setDisabled(false)
    username.length>=4 && password.length>=6 ? setDisabled(false) :setDisabled(true)
  }, [email, username, firstName, lastName, password, confirmPassword])


  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors({});
      return dispatch(
        sessionActions.signup({
          email,
          username,
          firstName,
          lastName,
          password,
        })
      )
        .then(closeModal)
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) {
            setErrors(data.errors);
          }
        });
    }
    return setErrors({
      confirmPassword: "Confirm Password field must be the same as the Password field"
    });
  };

  return (
    <>
      <div className="SignUpWrapper">
        <h1>Let's Explore Together!</h1>
        <form onSubmit={handleSubmit}>
          <label>
            {/* Email */}
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && <p className="errors">{errors.email}</p>}
          <label>
            {/* Username */}
            <input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          {errors.username && <p className="errors">{errors.username}</p>}
          <label>
            {/* First Name */}
            <input
            placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </label>
          {errors.firstName && <p className="errors">{errors.firstName}</p>}
          <label>
            {/* Last Name */}
            <input
              placeholder="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          {errors.lastName && <p className="errors">{errors.lastName}</p>}
          <label>
            {/* Password */}
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {errors.password && <p className="errors">{errors.password}</p>}
          <label>
            {/* Confirm Password */}
            <input
              placeholder="Confirm Password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          {errors.confirmPassword && (
            <p className="errors">{errors.confirmPassword}</p>
          )}
          <button
            id={disabled?"Disabled":"SubmitButton"}
            type="submit"
            disabled={disabled}
          >Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignupFormModal;
