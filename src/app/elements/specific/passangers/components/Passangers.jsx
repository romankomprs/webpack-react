// import React from 'react'
import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchPassengers } from '../actions';
// import { fetchPassangersSaga } from '../saga/fetchPassangersSaga';
// import { selectUser } from '../selectors/getPassengers';

import { selectUser } from '../selectors/getPassengers';  


import { useSelector } from 'react-redux'

// https://webpack.js.org/guides/getting-started/#modules

 
const Passangers = () => {    
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPassengers())      
    },[dispatch] )
    
    const selPassengers = useSelector(selectUser)
    console.log("selPassengers !!:", selPassengers)

    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((key, number) =>
    {number}
    );
    console.log("listItems", listItems)

    // const bookList= selectUser.map((user, key)=>
    // <div key={book.id}>
    //   <li>{user.name}</li>      
    // </div>
// )


  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <>
        <div>Passangers component</div>  

        <div  className="users">
          {data.map((user, key) => (
            <li key={key}>{user.name}</li>
          // <div key={key} className="user">{user}</div>
        ))}
      </div>
  
        {/* Webpack setup */}
        {/* https://stackoverflow.com/questions/72413406/my-webpack-configuration-for-react-18-shows-uncaught-typeerror-failed-to-resolv   */}
    </>
  )
}

export default Passangers