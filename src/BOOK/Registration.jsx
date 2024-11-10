import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Registration = () => {

    let navigate = useNavigate()

    let [state, setState] = useState({
        user: "",
        date: "",
        gender: "",
        textarea: "",
        email: "",
        num: "",
        text: ""
    });

    let { user, date, gender, textarea, email, num, text } = state;

    let handelChange = (e) => {
        let { name, value } = e.target;

        setState({ ...state, [name]: value });
    };

    let handelSubmit = async (e) => {
        e.preventDefault();


        try {

            let payload = { ...state }

            let { data } = await axios.post("http://localhost:3000/collect", payload)

            console.log({ data });

            navigate("/fetchdetails")

        } catch (err) {
            console.log(err);

        }

    };
    return (

        <div id='regbg'>
            <div id='font'>

                <div id='fb'>
                    <form action="" onSubmit={handelSubmit} >
                        <h3 id='h3'>RESISTRATION FORM</h3>

                        <div  >
                            <label htmlFor="user">STUDENT NAME :</label>
                            <input type="text" placeholder='FIRST NAME' name="user" value={user} onChange={handelChange} id='space' />
                        </div>

                        <br></br>

                        <div>
                            <label htmlFor="date">DATE OF BIRTH :</label>
                            <input type="datetime-local" name="date" value={date} onChange={handelChange} id='space' />
                        </div>

                        <br></br>

                        <div >
                            <label htmlFor="gender">GENDER : </label>
                            MALE<input type="radio" name='gender' value="male" onChange={handelChange} id='space' />
                            FEMALE<input type="radio" name='gender' value="female" onChange={handelChange} id='space' />
                        </div>

                        <br></br>

                        <div >
                            <label htmlFor="textarea">ADDRESS :</label>
                            <textarea name="textarea" value={textarea} id="space" placeholder='STATE' onChange={handelChange}  ></textarea>
                        </div>

                        <br></br>

                        <div>
                            <label htmlFor="email">E-MAIL :</label>
                            <input type="text" name="email" value={email} onChange={handelChange} id='space' />
                        </div>

                        <br></br>

                        <div>
                            <label htmlFor="num">MOBILE NUMBER :</label>
                            <input type="tel" maxLength={10} minLength={1} onChange={handelChange} name="num" value={num} id='space' />
                        </div>

                        <br></br>

                        <div>
                            <label htmlFor='course'>COURSE :</label>
                            <select name="course" id="space">
                                <option value="course"></option>
                                <option value="course">JAVA</option>
                                <option value="course">C</option>
                                <option value="course">C++</option>
                            </select>
                        </div>

                        <br></br>

                        <div>
                            <label htmlFor="text" >ADDITIONAL COMMENTS :</label>
                            <textarea name="" id='space' onChange={handelChange}></textarea>
                        </div>

                        <br></br>

                        <div>
                            <button id='submit'>SUBMIT</button>
                        </div>

                    </form>
                </div>
            </div>

        </div>


    )
}

export default Registration