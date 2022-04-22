import React from 'react'
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { State } from "../../state/index";
import Card from './Card';
import "./style.scss";

function Home() {
  const robos = useSelector((state : State)=>state.robos)
  const history = useNavigate()
  //
  return (
    <div className="main container">
      <div className="header">
      <h2 className="title">Robos list</h2>
      <button className='btn-create' onClick={()=>{history('/add')}}>Create robo</button>
      </div>
      <div className="robos">
        {robos?.map((robo)=> <Card  key={robo.id as string} robo={robo}/>)}
      </div>
    </div>
  )
}

export default Home