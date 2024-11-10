import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseDetails = () => {

    let navigate=useNavigate();

    
const handleTrainer=()=>{
    navigate('/trainerinfo');
  }

    return (
        <div id='course'>

            <div id='java'>
                <h1 id='H1'>JAVA FULLSTACK</h1>
                <div>
                    <p id='p'>Database</p>
                    <p id='p'>Core Java</p>
                    <p id='p'>J2EE</p>
                    <p id='p'>Web Technology</p>
                </div>
            </div>

            <div id='python'>
                <h1 id='H1'>MEAN STACK</h1>
                <div>
                    <p id='p'>HTML</p>
                    <p id='p'>CSS</p>
                    <p id='p'>BOOTSTRAP</p>
                    <p id='p'>JAVA SCRIPT </p>
                </div>
            </div>


            <div id='c'>
                <h1 id='H1'>C,C++</h1>
                <div>
                    <p id='p'>C++</p>
                    <p id='p'>C Programing</p>
                </div>

                <div>
                    <button  onClick={handleTrainer} id='trainerbutton'> click for more</button>
                </div>
            </div>


        </div>
    )
}

export default CourseDetails