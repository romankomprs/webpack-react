import { takeLatest } from "redux-saga/effects";
import { FETCH_PASSENGERS } from "constants/actionTypes/specific/passengers";
import { fetchPassangersSaga } from "./fetchPassangersSaga";

const passangersSagas = [
    takeLatest(FETCH_PASSENGERS,fetchPassangersSaga)
]

export default passangersSagas