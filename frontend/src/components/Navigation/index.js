import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../../index.css'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  if(sessionUser) <NavLink exact to = "">test</NavLink>
  return (
    <ul>
      <div className='NavigationWrapper'>
        <li>
          <NavLink className= "links" id="HomeLink" exact to="/">FairBnB</NavLink>
        </li>
        {isLoaded && (
          <li id="ProfileWrapper">

            {/* {if(sessionUser)console.log("fart")} */}
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </div>
    </ul>
  );
}

export default Navigation;
