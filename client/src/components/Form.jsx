import React, { useState } from 'react';
import axios from 'axios'

const Form = () => {


        const [hospital, setHospital] = useState("");
        const [day,setDay ] = useState("")


    // axios.post("http://localhost:3002/python/postArg1", formData)


        const handleHospitalChange = (event) => {
            setHospital(event.target.value)
        }

        const handleDayChange = (event) => {
            setHospital(event.target.value)
        }
    

        return (
            <div>
                <form>
                    <select value={hospital} onChange={handleHospitalChange}>
                        <option value="Mulago">Mulage</option>
                        <option value="Kirrudu">Kirrude</option>
                        <option value=""></option>
                    </select>

                    <select value={day} onChange={handleDayChange}>
                        <option value="Monday">Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                    </select>
                </form>
            </div>
        )
    };

    export default Form;
