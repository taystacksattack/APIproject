import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import OpenModalMenuItem from './OpenModalMenuItem';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import '../../index.css'
import './Navigation.css'
import { NavLink } from "react-router-dom";



function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showCreateSpot, setShowCreateSpot] = useState(false)
  const sessionUser = useSelector(state => state.session.user);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    closeMenu();
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  useEffect(()=>{
    if(sessionUser)setShowCreateSpot(true)
    if(!sessionUser)setShowCreateSpot(false)
  }, [sessionUser])


  return (
    <>
      <div className="topRightLinks">
        <NavLink exact to = "/spots/new" id="NewSpotLink" >
          {showCreateSpot ? (<>Create a New Spot </>): null}
        </NavLink>
      <button className = "buttons" onClick={openMenu}>
        <i id="hamburger" class="fa-solid fa-bars"></i>
        <i id= "UserButton" className="fa-regular fa-circle-user"></i>
      </button>
      </div>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>Hello {user.username}</li>
            <li>{user.email}</li>
            <li>
              <NavLink exact to="/spots/current" onClick={closeMenu}>Manage Spots</NavLink>
              <button id="LogoutButton" onClick={logout}>Log Out</button>
            </li>
          </>
        ) : (
          <>
            <OpenModalMenuItem
              itemText="Log In"
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            <OpenModalMenuItem
              itemText="Sign Up"
              onItemClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
