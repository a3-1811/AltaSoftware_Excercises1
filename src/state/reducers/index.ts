import { combineReducers } from "redux";
import { robosReducer } from "./robosReducer";

const rootReducer = combineReducers({
   robos: robosReducer
})

export default rootReducer;
export type State = ReturnType<typeof rootReducer>