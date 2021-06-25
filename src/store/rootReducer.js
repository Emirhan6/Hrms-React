import { combineReducers } from "redux";
import favorieReducer from "./reducers/favorieReducer";


const rootReducer = combineReducers({
    favorie : favorieReducer
})

export default rootReducer;