import React, { useState } from 'react'

const InsertAddress = () => {
    let url = 'http://localhost:5000/insertAddress'
    const [customerId, setCustomerId] = useState('')
    const [address, setAddress] = useState('')
    const [landmark, setLandmark] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [zipCode, setZipCode] = useState('')

    const click = async () => {
        let result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ customerId, address, landmark, city, state, country, zipCode }),
            headers: { 'Content-Type': 'application/json' }
        })
        result = await result.json()
        console.log(result)
    }

    return (
        <div>
            <h1>Insert Address Component</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>Customer ID <input type='text' placeholder="Enter Customer ID " value={customerId} onChange={(e) => { setCustomerId(e.target.value) }}></input></label>
                <label>Address <input type='text' placeholder="Enter Address" value={address} onChange={(e) => { setAddress(e.target.value) }}></input></label>
                <label>Landmark <input type='text' placeholder="Enter Landmark" value={landmark} onChange={(e) => { setLandmark(e.target.value) }}></input></label>
                <label>City<input type='text' placeholder="Enter City" value={city} onChange={(e) => { setCity(e.target.value) }}></input></label>
                <label>State<input type='text' placeholder="Enter State" value={state} onChange={(e) => { setState(e.target.value) }}></input></label>
                <label>Country<input type='text' placeholder="Enter Country" value={country} onChange={(e) => { setCountry(e.target.value) }}></input></label>
                <label>Zip Code<input type='text' placeholder="Enter Zip Code" value={zipCode} onChange={(e) => { setZipCode(e.target.value) }}></input></label>
                <button className='Button' onClick={click}>Submit</button>
            </form>
          

        </div>
    )
}

export default InsertAddress