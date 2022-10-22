import { get } from "lodash/fp";

const initialState = [{ name: undefined }];

export default (state = initialState, action) => {
  return get(["type"])(action) === "SET_PASSENGERS"
    ? get(["users"])(action)
    : state;
};

// const getPassangers = state => state.passangers;

// export const  selectUser = createSelector(
//      getPassangers, (passangers => passangers[0])
//   )
