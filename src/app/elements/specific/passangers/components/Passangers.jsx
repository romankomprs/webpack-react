import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { fetchPassengers } from 'specific/passangers/actions';
import { selectUser } from 'specific/passangers/selectors/getPassengers';  
import { useSelector } from 'react-redux';
import  BasicTable  from "specific/passangers/components/BasicTable"

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

  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return (
    <>
        {/* <Box components= 'div'>Passangers component</Box>   */}

        <div className="users">
          {data.map((user, key) => (
            <li key={key}>{user.name}</li>          
        ))}
      </div>

      <BasicTable />
    </> 
  )
}

export default Passangers