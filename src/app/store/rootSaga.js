import {all } from "redux-saga/effects"
import passangersSagas from "../elements/specific/passangers/saga"

export default function* rootSaga(){
    yield all([
        ...passangersSagas
    ])
    

    }
