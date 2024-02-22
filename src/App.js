import Login from './pages/Login';
import axios from "axios";
import React, { useEffect} from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Note from './pages/Note';
import NotFound from './pages/NotFound';
import HomeNav from "./component/HomeNav";
// import EditNote from './component/EditNote'
import ViewNote from './component/ViewNote';
import { Route, Routes, Navigate } from 'react-router-dom';
// import axios from "axios";

function App() {
  const element = <Profile/>;
  // const Apps = () => 
  //   useRoutes(['/login'].map(path => ({path, element})));

  // const timerFunc = async () => {
  //   const delay = ms => new Promise(res => setTimeout(res, ms));
  //   await delay(900000);
  //   console.log("Jema!")
  // }

  // useEffect(()=>{
    // while(true){
    //   setTimeout('', 5000);
    // }
    // timerFunc();
  // }, [])

  return (
    <React.Fragment>
      <HomeNav/>
      <Routes>
        <Route path="/" element={element}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/note" element={<Note/>}>
          <Route path="view/:postId" element={<ViewNote/>}/>
          {/* <Route path="edit/:postId" element={<EditNote/>}/> */}
        </Route>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="*" element={<Navigate to="/404"/>} />
      </Routes>
    </React.Fragment>
      
  );
}

export default App;
