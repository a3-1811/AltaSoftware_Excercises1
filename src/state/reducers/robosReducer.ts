import { Action, Robo } from "../actions";
import { ActionTypes } from "../action-types";

const initialState :Robo[] = []

export const robosReducer = (state= initialState,actions : Action)=>{
    switch (actions.type) {
        case ActionTypes.ADD_ROBO:
            // Thêm mới 1 Robo
            let temp= [...state]
            let newRobo = actions.payload
            temp.push(newRobo)
            return [...temp]
        case ActionTypes.FECTH_DATA:
            return [...actions.payload]
        case ActionTypes.DELETE_ROBO:
            // Xóa 1 Robo
            let cloneState= [...state]
            let nameRobo = actions.payload
            let indexNeedDelete = cloneState.findIndex(robo=> robo.name === nameRobo)
            if(indexNeedDelete !== -1){
                cloneState.splice(indexNeedDelete,1)
            }
            return [...cloneState]
        case ActionTypes.UPDATE_ROBO:
            // Cập nhật 1 Robo
            let { name } = actions.payload
            let cloneRobots = [...state]
            let indexNeedUpdate = cloneRobots.findIndex(robo=> robo.name === name)
           if(indexNeedUpdate !== -1){
            cloneRobots[indexNeedUpdate] = {...cloneRobots[indexNeedUpdate],...actions.payload}
           }
            return [...cloneRobots]
        default:
            return [...state]
    }

}
