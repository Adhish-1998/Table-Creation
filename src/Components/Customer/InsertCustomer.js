import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './InsertCustomer.css'

const InsertCustomer = () => {
    let host = 'https://table-creation-production.up.railway.app/insertCustomer'

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const [gender, setGender] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleClick = async (event) => {
        console.log(firstName)
        event.preventDefault()
        let result = await fetch(host, {
            method: 'POST',
            body: JSON.stringify({ firstName }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()
        console.log(result)
    }

    return (
        <div>
            <h1>Insert Customer Component</h1>

            <div className='Form'>
                <form onSubmit={(e) => e.preventDefault()} className='Form'>
                    <label>First Name <input type='text' placeholder="Enter First Name" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input></label>
                    <label>Last Name <input type='text' placeholder="Enter Last Name" value={lastName} onChange={(event) => setLastName(event.target.value)}></input></label>
                    <label>User Name <input type='text' placeholder="Enter User Name" value={userName} onChange={(event) => setUserName(event.target.value)}></input></label>
                    <label>Email <input type='text' placeholder="Enter Email" value={email} onChange={(event) => setEmail(event.target.value)}></input></label>
                    <label>Phone <input type='text' placeholder="Enter Phone" value={phone} onChange={(event) => setPhone(event.target.value)}></input></label>
                    <label>Dob <input type='text' placeholder="Enter Dob" value={dob} onChange={(event) => setDob(event.target.value)}></input></label>
                    <label>Gender <input type='text' placeholder="Enter Gender" value={gender} onChange={(event) => setGender(event.target.value)}></input></label>
                    <label>Password <input type='password' placeholder="Enter Password" value={password} onChange={(event) => setPassword(event.target.value)}></input></label>
                    <label>Confirm Password <input type='password' placeholder="Enter Confirm Password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}></input></label>
                    <button className='Button' onClick={handleClick}>Submit</button>
                    <NavLink to='/insertAddress' ><button className='Button'>Add Address</button></ NavLink>
                </form>
                
            </div>

        </div>
    )
}

export default InsertCustomer