import { createSelector } from 'reselect'


const getPassangers = state => state.passangers;

export const  selectUser = createSelector(
     getPassangers, (passangers => passangers[0])
  )