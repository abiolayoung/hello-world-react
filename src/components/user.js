import React from 'react'
import abiola from './abiola.jpeg'

//creating single component profile card...
function UserProfileCard() {
    return (
      <div className="card">
        <img className="card-img" src={abiola} alt="logo- image" />
        <div className="card-name">Adeniyi Abiola (Co-Founder)</div>
        <div>
          Abiola is a lovely and a tech enthusiast, schooling at altschool
        </div>
      </div>
    );
  }
  
export default UserProfileCard;