import React, { useEffect, useState } from "react";
import './CustomerList.css';


const CustomerList = () => {
    let url = 'https://table-creation-production.up.railway.app/selectCustomers'
    const [customerList, setCustomerList] = useState([])
    const getCustomer = async () => {
        let result = await fetch(url, {
            method: 'GET'
        })
        result = await result.json()
        setCustomerList(result.data)
        console.log(result)
    }

    useEffect(() => {
        getCustomer()
    }, [])

    return (
        <div >
            <h1>Customer List Component</h1>
            <div className="List">
                <ul>
                    <li>Name</li>
                    <li>Email</li>
                </ul>
                {customerList.map((data) =>
                    <ul>
                        <li>{data.firstName + data.lastName}</li>
                        <li>{data.email}</li>
                    </ul>
                )}
            </div>

        </div>
    )
}

export default CustomerList