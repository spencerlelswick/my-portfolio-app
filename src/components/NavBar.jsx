import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import Wrapper from '../styles/NavBar';

const NavBar = () => {
  return (
    <Wrapper>
      <div className='logo-container'>
        <NavLink to='/' className='link'>
          <img className='logo' alt='logo' src={Logo} />
        </NavLink>
        <NavLink to='/' className='link'>
          <p className='title'>Spencer Elswick</p>
          <p className='subtitle'>Software Developer</p>
        </NavLink>
      </div>
      <div>
        <ul className='link-container'>
          <li>
            <NavLink to='/' className='link'>
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/skills" className="link">
              Skills
            </NavLink>
          </li> */}
          <li>
            <NavLink to='/projects' className='link'>
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default NavBar;
