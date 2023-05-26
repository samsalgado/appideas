import React from 'react'
import club from './club.png'
import "./App.css";
import church from './church.png'
import ecom from './ecom.PNG'
import ent from './ent.png'
import nft from './nft.png'
import Titles from './genElems'
const Ideas = () => {
  return (
    <>
    <table className='elements'>
      <thead>
        <tr className='title'>
          <th>Club Platform
          <img src={club} className = "club" alt='pic' />
        </th>
        <th>E-commerce Platform
          <img src={ecom} className = "club" alt='pic' />
        </th>
        <th>NFTs as People
          <img src={nft} className = "club" alt='pic' />
        </th>
        <th>Church Platform
          <img src={church} className = "club" alt='pic' />
        </th>
        <th>Assisting Entrepreneurs 
          <img src={ent} className = "club" alt='pic' />
        </th>
        </tr>
      </thead>
      <tbody>
        <Titles ideaOne = "Application assisting Clubs - promotion, marketing, connecting with patrons, social media for clubs."
        ideaTwo = "E-Commerce application levying cryptocurrency as a means of transaction. Initializing a database for user storage."
        ideaThree = "Smart Contract creation leveraging people as NFTs."
        ideaFour = "Church platform creating a social media platform for 18-25 year olds to connect with one another - speed dating, events, users connecting to individual churches and churches connecting with one another."
        ideaFive = "Creation of landing page, database, and application for entreprenuerial ideas or projects."
        />
      </tbody>
    </table>
    </>
  )
}
export default Ideas;