import React from 'react';
import '../App.css';
import { Button } from './button';
import './herosection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='./images/VGTU.jpg' />
      <h1>Renvitus</h1>
      <p>Automatic drone recharging system</p>
      <div className='hero-btns'>
    
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
