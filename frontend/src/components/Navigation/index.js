import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import '../../index.css'
import { useHistory } from 'react-router-dom';

function Navigation({ isLoaded }){
  const history = useHistory()
  const sessionUser = useSelector(state => state.session.user);

  const backToHome = () =>{
    history.push('/')
  }

  if(sessionUser) <NavLink exact to = "">test</NavLink>
  return (
    <ul>
      <div className='NavigationWrapper'>
        <div >
          <li className="TopLeft" onClick={backToHome} >
            <img id="logo" src="https://cdn.discordapp.com/attachments/1102007410014556160/1106656119520252006/Ferris-Wheel-Silhouette-PNG-Picture_copy_2.png" ></img>
            <NavLink className= "links" id="HomeLink" exact to="/">FairBnB</NavLink>
          </li>
        </div>
        {isLoaded && (
          <li id="ProfileWrapper">
            <ProfileButton user={sessionUser} />
          </li>
        )}
      </div>
    </ul>
  );
}

export default Navigation;
