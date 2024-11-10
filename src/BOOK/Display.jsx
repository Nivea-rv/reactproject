import React from 'react'
import { Link } from 'react-router-dom'

const Display = ({user,date,gender,textarea,email,num,id}) => {
    return (
      <div id='display'>
        <div id='view'>
            <div>
                <p>NAME : {user}</p>
                <p> DATE : {date} </p>
                <p>GENDER :{gender}</p>
                <p>ADDRESS :{textarea} </p>
                <p>E-MAIL : {email}</p>
                <p>PHONE NUMBER : {num}</p>
            </div>
            <br />

            <div>
                <Link to={`/edit/${id}`}>EDIT</Link>
            </div>
            <br />
            <div>
                <Link to={`/delete/${id}`}>DELETE</Link>
            </div>

        </div>

        </div>

    )
}

export default Display