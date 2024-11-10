import React from 'react'
import { Link } from 'react-router-dom'

const TrainerInfo = () => {
    return (
        <div id='trainer'>

            <div id='tinfo'>

                <h1 id='H1t'>TRAINER DETAILS</h1>
                <div id='box3'>
                    <h3 id='h3t'>Front End</h3>
                    <p id='pt'>LAXMAN</p>
                    <p id='pt'>DHARSHAN</p>
                    <p id='pt'>SAISH GURURAJ KULKARNI</p>
                </div>
                <div id='box3'>
                    <h3 id='h3t'>Middle</h3>
                    <p id='pt'>SHANKAR NARAYAN</p>
                    <p id='pt'>SRIDHAR</p>
                    <p id='pt'>SIDDESH</p>
                </div>
                <div id='box3'>
                    <h3 id='h3t'>Back End</h3>
                    <p id='pt'>SHASHANK</p>
                </div>
            </div>

            <div id='enquiry'>

                <div id='box1'>
                    <h3 id='h3t'>BRANCHES;</h3>
                    <p id='pte'>Bangalore | Mysore | Tamilnadu | Telangana | Andhra Pradesh |
                        Madhya Pradesh | Haryana | Odisha | Uttar Pradesh | New Delhi | Gujarat | kerala</p>
                </div>
                <div id='box2'>
                <h3 id='h3t'> TO KNOW MORE;</h3>
                <p id='ptk'>Click the following links</p>
                    <div  id='morelink'>
                    
                    <Link to={ 'https://jspiders.com/batches'} className='morelink'>» BATCHES DETAILS</Link>
                    <Link to={'https://jspiders.com/contact'}  className='morelink'>» CONTACT DETAILS</Link>
                    <Link to={'https://placements.jspiders.com/'}  className='morelink'>» PLACEMENTS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerInfo