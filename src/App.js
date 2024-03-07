import "./App.css";
import React from "react";
import UserProfileCard from "./components/user.js";
import Header from "./components/header.js";
import UserProfileCard2 from "./components/user2.js";
import ListItems from "./components/listItem.js";
import dataItem from "./components/listComponent.js";
import Counter from './counter.js'
import OnChange from "./onChange.jsx";

// root component
function App() {

  return (
    <section className="main-page">
      <div className="header">
        <Header />
      </div>
      <UserProfileCard />
      <UserProfileCard2 />
      <ol>{ListItems}</ol>
      <div>{dataItem}</div>
      <Counter/>
      <OnChange/>
    </section>
  );
}

export default App;
