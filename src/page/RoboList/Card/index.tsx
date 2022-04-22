import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../../state'
import { Gender, Robo } from '../../../state/actions'
import "./style.scss"
interface CardProp{
  key : string,
  robo: Robo,
}

function SpanElement(prop : {children: any}){
  return <span>{prop.children}</span>
}

function Card(prop : CardProp){
  const { robo } = prop
  const dispatch = useDispatch()
  const {removeRobo} = bindActionCreators(actionCreators,dispatch)

  const handleDeleteRobo = (id : string):void=>{
    removeRobo(id)
  }
  return (
    <div className="card">
      <div className="imgBox"><img src={robo.image as string} alt="" /></div>
      <div className="card-body">
      <h3 className="heading">{robo.name}</h3>
        <div className="card-info">
        <div className="gender">
        {robo.gender === Gender.MALE ? <i className="fa fa-mars male"></i>
        : <i className="fa fa-venus female"></i>}
        </div>
      <div className="stats">
        <SpanElement>Hp : {robo.hp}</SpanElement>
        <SpanElement>Dame: {robo.dame}</SpanElement>
      </div>
        </div>
      </div>
      <div className="card-control">
        <i className="fa fa-trash-alt delete" onClick={()=>{handleDeleteRobo(robo.id)}}></i>
        <Link to={`/update/${robo.id}`} ><i className="fa fa-edit"></i></Link>
      </div>
    </div>
  )
}

export default Card