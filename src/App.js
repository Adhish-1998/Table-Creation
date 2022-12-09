import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CustomerList from './Components/Customer/CustomerList';
import Customer from './Components/Customer/Customer'
import InsertCustomer from './Components/Customer/InsertCustomer';
import UpdateCustomer from './Components/Customer/UpdateCustomer';
import DeleteCustomer from './Components/Customer/DeleteCustomer';
import InsertAddress from './Components/Address/InsertAddress';
import NavBar from './Components/NavBar/NavBar'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<CustomerList />} /> 
            <Route path='/selectCustomerById' element={<Customer />} /> 
            <Route path='/insertCustomer' element={<InsertCustomer />} /> 
            <Route path='/updateCustomer' element={<UpdateCustomer />} /> 
            <Route path='/deleteCustomer' element={<DeleteCustomer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;