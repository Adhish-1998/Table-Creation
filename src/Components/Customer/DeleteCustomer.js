import React, {useState, useEffect} from 'react'

const DeleteCustomer = () =>{
    let url = 'http://localhost:5000/deleteCustomer'
    const [id, setId] = useState('')

    const getCustomer = async() =>{
        console.log(id)
        let result = await fetch(url,{
            method: 'POST',
            body : JSON.stringify({id}),
            headers : {'content-type' : 'application/json'}
        })
        result = await result.json()
    }

    useEffect(()=>{
        getCustomer()
    },[])

    return (
        <div>
            <h1>Customer Component</h1>
            <label>Customer ID <input type='text' placeholder='Enter ID' value={id} onChange={(e)=>setId(e.target.value)}></input></label>
            <button className='Button' onClick={getCustomer}>Delete</button>
        </div>
    )
}

export default DeleteCustomer