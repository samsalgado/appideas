import React from 'react'
import "./App.css"
import logo from './logo.png'
import Button from '@mui/material/Button';
function Topbar () {
  return (
    <div className='Site-header'>
        <h2 className='intro'>App Ideas for Your Business</h2>
        <div><img src={logo} className='logo' alt="logo" />
        <div className='contact'> <Button className='mail' onClick={() => window.location = 'mailto:samueljuansalgado@gmail.com'}>Contact Me</Button></div>
    </div>
    </div>
  )
}

export default Topbar