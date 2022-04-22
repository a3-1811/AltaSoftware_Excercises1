import { ActionTypes } from "../action-types";

export enum Gender{
    FEMALE = "female",
    MALE = "male"
}

export interface Robo{
    id: string,
    name: String,
    gender: Gender,
    image: String,
    dame: Number,
    hp:Number
}
export interface RoboCreate{
    name: String,
    gender: Gender,
    image: String,
    dame: Number,
    hp:Number
}

export interface RoboUpdate{
    id: string,
    name?: String,
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