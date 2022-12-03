import React from 'react'
import './App.css';
import Home from './components/home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';   
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from './components/userlist/UserList';
import User from './components/user/User';
import NewUser from './components/newUser/NewUser';




function App() {
  return (
    <BrowserRouter className="App">
      <Topbar/>
      <div className="sidebar_container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Users" element={<UserList/>}></Route>
          <Route path="/User/:userId" element={<User/>}></Route>
          <Route path="/newUser" element={<NewUser/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
