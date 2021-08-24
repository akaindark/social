import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";



const App = () => {

  return (
    <div className="appWrapper">
      <Header/>
      <Menu/>
      <div className='appWrapper__content'>
        {/*<Dialogs />*/}
        <Profile/>
      </div>
    </div>
  );
}

export default App;
