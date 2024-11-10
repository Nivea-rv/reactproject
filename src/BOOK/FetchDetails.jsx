import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios'
import Display from './Display';

const FetchDetails = () => {
        let [state,setState]=useState(null);
        let fetchData=async()=>{
            let data =await axios.get("http://localhost:3000/collect");
            setState(data.data)
        }
    
        useEffect(()=>{
            fetchData()
        },[])
  return (
    <div>
         <h1>DETAILS</h1>
        <div>
            {
                state === null ? (<Spinner></Spinner>) : state.map((data)=> {return <Display key={data.id} {...data}></Display>})
            }
        </div>
    </div>
  )
}

export default FetchDetails