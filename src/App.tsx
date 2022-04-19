import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.scss';
import Home from './page/Home';
import { actionCreators,State } from "./state/index";

function App() {
  const dispatch = useDispatch()
  const {fetchRobosData} = bindActionCreators(actionCreators,dispatch)

  useEffect(()=>{
    fetchRobosData()
  },[])

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
