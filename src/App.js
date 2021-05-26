import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";



const App = () => {

  return (
    <div className="appWrapper">
      <Header/>
      <Menu/>
      <Profile/>
    </div>
  );
}

export default App;
