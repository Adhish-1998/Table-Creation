import React, {useEffect, useState} from 'react'

const Customer = () =>{
    let url = 'https://table-creation-production.up.railway.app/selectCustomerById'
    const [id, setId] = useState('')
    const [customer, setCustomer] = useState(null)

    const getCustomer = async() =>{
        console.log(id)
        let result = await fetch(url,{
            method: 'POST',
            body : JSON.stringify({id}),
            headers : {'content-type' : 'application/json'}
        })
        result = await result.json()
        setCustomer(result.data)
        console.log(result.data)
    }

    useEffect(()=>{
        getCustomer()
    },[])

    return (
        <div>
            <h1>Customer Component</h1>
            <label>Customer ID <input type='text' placeholder='Enter ID' value={id} onChange={(e)=>setId(e.target.value)}></input></label>
            <button className='Button' onClick={getCustomer}>Search</button>
            <h1>{customer}</h1>
        </div>
    )
}

export default Customer