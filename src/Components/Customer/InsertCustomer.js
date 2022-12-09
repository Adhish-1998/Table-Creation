import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'

const InsertCustomer = () =>{
    let host = 'http://localhost:5000/insertCustomer'
    const [firstName,setFirstName] = useState('')

    const handleClick = async(event)=>{
        console.log(firstName)
        event.preventDefault()
        let result = await fetch(host,{
            method: 'POST',
            body: JSON.stringify({firstName}),
            headers: {'Content-Type' : 'application/json'}
        })
        result = await result.json()
        console.log(result)
    }
 
    return (
        <div>
            <h1>Insert Customer Component</h1>
            <label>Name <input type='text' placeholder="Enter Name" value={firstName} onChange={(event)=>setFirstName(event.target.value)}></input></label>
            <button className='Button' onClick={handleClick}>Submit</button>
            <NavLink to='/insertAddress' ><button className='Button'>Add Address</button></ NavLink>
        </div>
    )
}

export default InsertCustomer