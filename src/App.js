import React from "react";
import './App.scss';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {


  return (
    <BrowserRouter>
      <div className="appWrapper">
        <Header/>
        <Menu/>
        <div className='appWrapper__content'>
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
          <Route path='/news' render={() => <News/>}/>
          <Route path='/music' render={() => <Music/>}/>
          <Route path='/settings' render={() => <Settings/>}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
