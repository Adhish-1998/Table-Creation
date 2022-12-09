import React, { useState } from 'react'
import { json } from 'react-router-dom'

const UpdateCustomer = () => {
    let url = 'http://localhost:5000/updateCustomer'
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')

    const click = async() => {
        let result = await fetch(url, {
            method : 'POST',
            body : JSON.stringify({firstName, lastName, dob, gender}),
            headers: {'content-type' : 'application/type'}
        })
        result = await result.json()
        console.log('Success')
    }
    return (
        <div>
            <h1>Update Customer Component</h1>
            <form onSubmit={(e) => e.preventDefault()} className='Form'>
                <label>Customer ID <input type='text' placeholder='Customer ID'></input></label>
                <label>First Name <input type='text' placeholder="Enter First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input></label>
                <label>Last Name <input type='text' placeholder="Enter Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)}></input></label>
                <label>Dob <input type='text' placeholder="Enter Dob" value={dob} onChange={(event) => setDob(event.target.value)}></input></label>
                <label>Gender <input type='text' placeholder="Enter Gender" value={gender} onChange={(event) => setGender(event.target.value)}></input></label>
                <label>Password <input type='password' placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)}></input></label>
                <button className='Button' onClick={click}>Update</button>
            </form>
        </div>
    )
}

export default UpdateCustomer