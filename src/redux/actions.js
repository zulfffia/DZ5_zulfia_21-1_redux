import {types} from "./types";

export function addInput(event){
    return {
        type: types.ADD_INFO,
        payload: event
    }
}


export function clearInput () {
    return {
        type: types.CLEAR
    }
}