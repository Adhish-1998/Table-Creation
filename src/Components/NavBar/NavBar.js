import React,{useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'



const Navbar = () => {
  let location = useLocation()
  useEffect(()=>{
    console.log(location.pathname)
    
  },[location])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">Function Up</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/home"?"active":" "}`} aria-current="page" to="insertCustomer">Insert Customer</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":" "}`} aria-current="page" to="selectCustomerById">Get Customer</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":" "}`} aria-current="page" to="updateCustomer">Update</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/about"?"active":" "}`} aria-current="page" to="deleteCustomer">Delete</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <Link class="btn btn-primary mx-2" to='/login' role="button">login</Link>
        <Link class="btn btn-primary mx-2"  to='/signup' role="button">signup</Link>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar