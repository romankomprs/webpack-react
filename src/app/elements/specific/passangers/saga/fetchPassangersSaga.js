import axios from "axios";
import {put} from "redux-saga/effects"
import {get} from 'lodash/fp'

// generator function
export function* fetchPassangersSaga(){
    // spinner, start of process // loader
    // passangersProcessing
    
    try {
        const response =  yield axios.get("https://jsonplaceholder.typicode.com/users")

        const users = get(["data"])(response)
        console.log("users:",users)

        yield put({type: "SET_PASSENGERS", users}) // zavola reducery vsechny
        

    } catch (error) {
        // catch

    }
}