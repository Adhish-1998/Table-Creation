const express = require('express')
const router = express.Router()
const {getCustomerList, getCustomer, insertCustomer, updateCustomer, deleteCustomer } = require('../Controller/customerController')
const {insertAddress} = require('../Controller/addressController')

//-------------For Customer------------------//
router.get('/selectCustomers', getCustomerList)
router.post('/', getCustomer)
router.post('/insertCustomer', insertCustomer)
router.post('/updateCustomer', updateCustomer)
router.post('/deleteCustomer', deleteCustomer)

//-------------For Address------------------//
router.post('/insertAddress', insertAddress)

//-------------For Invaild URL------------------//
router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Page Not Found !!!"
    })
})




module.exports = router