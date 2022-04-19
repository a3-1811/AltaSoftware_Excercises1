import { Dispatch } from "redux";
import RobosAPI from "../../API/robosApi";
import { ActionTypes } from "../action-types";
import { Action, Robo, RoboUpdate } from "../actions";

//Fetch data to store
export const fetchRobosData = ()=>{
    return (dispatch : Dispatch<Action>)=>{
        RobosAPI.getListRobos()
        .then((res)=>{
            let robos : Robo[] = []
            let nameKeys = Object.keys(res)
            
            nameKeys.forEach((name : string)=>{
                let obj = {
                    ...res[name as any]
                }
                obj.name = name
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

export const addRobo = (robo: Robo)=>{
    return (dispatch : Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.ADD_ROBO,
            payload: robo
        })
    }
}
export const removeRobo = (roboName : string)=>{
    return (dispatch : Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.DELETE_ROBO,
            payload: roboName
        })
    }
}
export const updateRobo = (robo: RoboUpdate)=>{
    return (dispatch : Dispatch<Action>)=>{
        dispatch({
            type: ActionTypes.UPDATE_ROBO,
            payload: robo
        })
    }
}