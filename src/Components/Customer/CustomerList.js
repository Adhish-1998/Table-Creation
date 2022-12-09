import React ,{useEffect,useState} from "react"

const CustomerList = () =>{
    let url = 'http://localhost:5000/selectCustomers'
    const [customerList, setCustomerList] = useState([])
    const getCustomer = async () =>{
        let result = await fetch(url, {
            method : 'GET'
        })
        result = await result.json()
        setCustomerList(result.data)
        console.log(result)
    }

    useEffect(()=>{
        getCustomer()
    },[])

    return (
        <div>
            <h1>Customer List Component</h1>
            {customerList.map((data)=>
            <h1>{data.firstName}</h1>)}
        </div>
    )
}

export default CustomerList