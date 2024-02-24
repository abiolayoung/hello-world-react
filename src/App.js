// import logo from './logo.svg';
import './App.css';
import React from 'react';

// creating a react component
function Greetings() {
  return <p>hello world, my name is abeeb abiola adeniyi from altschool africa</p>
}

function UserProfileCard (){
  return (
    <div className="card">
    <div className="card-name">Adeniyi Abiola</div>
    <div>Abiola is a lovely and a tech enthusiast, schooling at altschool</div>
    <img className="card-img"
    src=""/>
    </div>
  )
}
// root component
function App() {
  return <section className="main-page">
    <Greetings/>
    <UserProfileCard/>
  </section>
  
}

export default App;
