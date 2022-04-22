import { Dispatch } from "redux";
import RobosApi from "../../API/robosApi";
import RobosAPI from "../../API/robosApi";
import { ActionTypes } from "../action-types";
import { Action, Robo, RoboCreate, RoboUpdate } from "../actions";

//Fetch data to store
export const fetchRobosData = ()=>{
    return (dispatch : Dispatch<Action>)=>{
        RobosAPI.getListRobos()
        .then((res)=>{
            let robos : Robo[] = []
            let nameKeys = Object.keys(res)
            
            nameKeys.forEach((id : string)=>{
                let obj = {
                    ...res[id as any]
                }
                obj.id = id
                robos.push(obj)
            })
            dispatch({
                type: ActionTypes.FECTH_DATA,
                payload: robos
            })
        })
        .catch(err=>console.log({err}))
    }
}

export const addRobo = (roboCreate: RoboCreate)=>{
    return (dispatch : Dispatch<Action>)=>{
      RobosApi.addRobo(roboCreate).then((data) => {
        let robo : Robo = {
            id: data.name,
            ...roboCreate
        }
          dispatch({
              type: ActionTypes.ADD_ROBO,
              payload: robo
          })
      })
    }
}
export const removeRobo = (id : string)=>{
    return (dispatch : Dispatch<Action>)=>{
        //Goi api xoa robo
        RobosApi.deleteRobo(id).then((res)=>{
            dispatch({
                type: ActionTypes.DELETE_ROBO,
                payload: id
            })
        })
        .catch(err=>console.log)
    }
}
export const updateRobo = (robo: RoboUpdate)=>{
    return (dispatch : Dispatch<Action>)=>{
        RobosAPI.updateRobo(robo)
        .then((res)=>{
            let roboUpdate :RoboUpdate = {...res}
            dispatch({
                type: ActionTypes.UPDATE_ROBO,
                payload: roboUpdate
            })
        })
      
    }
}