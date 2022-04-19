import React from 'react'
import {  useSelector } from 'react-redux';
import { State } from "../../state/index";

function Home() {
  const robos = useSelector((state : State)=>state.robos)
  return (
    <div>{robos?.map((robo)=> <p key={robo.name as string}>{robo.name}</p>)}</div>
  )
}

export default Home