import React from 'react';
import profileImage from '../assets/me.jpg';
import Wrapper from '../styles/About';

const About = () => {
  return (
    <Wrapper>
      <div className='profile-image-container'>
        <img src={profileImage} alt='Profile picture of Spencer' />
      </div>

      <div className='bio'>
        <h1>Lorem ipsum</h1>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum
        </p>
        <p>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum
        </p>
        <p>
          Later, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
          ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        </p>
      </div>
    </Wrapper>
  );
};

export default About;
