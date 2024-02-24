import logo from './assets/logo.jpg';
import abiola from './assets/abiola.jpeg';
import './App.css';
import React from 'react';

// creating a react component
function Greetings() {
  return <h2>Mindlift Wellness Staff Profile</h2>
}

//creating single component profile card...
function UserProfileCard (){
  return (
    <div className="card">
      <img className="card-img"
    src={abiola} alt="logo- image"/>
    <div className="card-name">Adeniyi Abiola (Co-Founder)</div>
    <div>Abiola is a lovely and a tech enthusiast, schooling at altschool</div>
    </div>
  )
}

// spliting components

function Avatar(){
  return <img className="card-img"
  src={logo} alt="logo- image"/>
}

function UserProfileCard2 (){
  return (
    <div className="card">
    <Avatar/>
    <div className="card-name">Salvation Okafor (Development Specialist)</div>
    <div>Salvation is a lovely and a tech enthusiast, schooling at altschool</div>
    </div>
  )
}

// root component
function App() {
  return <section className="main-page">
    <div class="header"><Greetings/></div>
    <UserProfileCard/>
    <UserProfileCard2/>
  </section>
  
}

export default App;
