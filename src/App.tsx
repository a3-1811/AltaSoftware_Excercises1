import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';
import RoboList from './page/RoboList';
import { actionCreators,State } from "./state/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Add from "./page/Add";
import Update from "./page/Update";

function App() {
  const dispatch = useDispatch()
  const {fetchRobosData} = bindActionCreators(actionCreators,dispatch)

  useEffect(()=>{
    fetchRobosData()
  },[])

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>        
        <Route path='/' element={<RoboList/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/update/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;