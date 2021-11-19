import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path="/profile"
                           render={() => <Profile profilePage={props.state.profilePage}
                                                  dispatch={props.dispatch}/>}
                    />
                    <Route path="/dialogs"
                           render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                  msgData={props.state.dialogsPage.msgData}/>}
                    />
                    <Route path="/music"
                           render={() => <Music/>}
                    />
                    <Route path="/settings"
                           render={() => <Settings/>}
                    />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
