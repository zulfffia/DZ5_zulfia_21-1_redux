import {types} from "./types";

const initialState = {
    list: []
}


export default function  infoReduser (state = initialState, action) {
    switch (action.type){
        case types.ADD_INFO:
            return {...state, list:[...state.list, +state.list.length > 0 ? +state.list[state.list.length - 1]+ +action.payload : +action.payload]}
        case types.CLEAR:
            return {list: [], input: ""}
        default:
            return state
    }

}