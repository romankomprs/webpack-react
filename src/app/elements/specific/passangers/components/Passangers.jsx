// import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchPassengers } from '../actions';
// import { fetchPassangersSaga } from '../saga/fetchPassangersSaga';
// import { selectUser } from '../selectors/getPassengers';

import { selectUser } from '../selectors/getPassengers';  


// import { useSelector } from 'react-redux'

// https://webpack.js.org/guides/getting-started/#modules

 
const Passangers = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPassengers())      
    },[dispatch] )
    
    // const selPassengers = useSelector(selectUser)
    // console.log("selPassengers:", selPassengers)
    

  return (
    <>
        <div>Passangers component</div>  
        {/* Webpack setup */}
        {/* https://stackoverflow.com/questions/72413406/my-webpack-configuration-for-react-18-shows-uncaught-typeerror-failed-to-resolv   */}
    </>
  )
}

export default Passangers