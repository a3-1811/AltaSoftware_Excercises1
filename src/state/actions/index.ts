import { ActionTypes } from "../action-types";

enum Gender{
    "female",
    "male"
}

export interface Robo{
    name: String,
    gender: Gender,
    image: String,
    dame: Number,
    hp:Number
}

export interface RoboUpdate{
    name: String,
    gender?: Gender,
    image?: String,
    dame?: Number,
    hp?:Number
}

interface FecthRoboAction{
    type : ActionTypes.FECTH_DATA
    payload: Robo[]
}

interface AddRoboAction{
    type : ActionTypes.ADD_ROBO
    payload: Robo
}

interface RemoveRoboAction{
    type : ActionTypes.DELETE_ROBO
    payload: String
}

interface UpdateRoboAction{
    type : ActionTypes.UPDATE_ROBO,
    payload: RoboUpdate
}

export type Action = AddRoboAction | RemoveRoboAction | UpdateRoboAction | FecthRoboAction