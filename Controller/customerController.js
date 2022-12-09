const customerModel = require("../Models/customerModel")

const getCustomerList = async (req,res) =>{
    let customerList = await customerModel.find({ isDeleted: false})
    return res.status(200).send({status: true, data: customerList})
}

const getCustomer = async (req,res) =>{
    let customer = await customerModel.findOne({ _id: req.body.id, isDeleted: false})
    return res.status(200).send({status: true, data: customer})
}

const insertCustomer = async (req,res) =>{
    console.log(req.body)
    let customer = await customerModel.create(req.body)
    return res.status(201).send({status : true, data : customer})
}

const updateCustomer = async (req,res) =>{
    let updateObj = {}
    if(req.body.firstName) updateObj['firstName'] = req.body.firstName
    if(req.body.lastName) updateObj['lastName'] = req.body.lastName
    if(req.body.userName) updateObj['userName'] = req.body.userName
    if(req.body.email) updateObj['email'] = req.body.email
    if(req.body.phone) updateObj['phone'] = req.body.phone
    if(req.body.dob) updateObj['dob'] = req.body.dob
    if(req.body.gender) updateObj['gender'] = req.body.gender
    if(req.body.password) updateObj['password'] = req.body.password

    let updatedCustomer = await customerModel.findOneAndUpdate(
        {_id : req.params.id},
        {updateObj},
        {new : true}
    )

    return res.status(200).send({status : true, data : updatedCustomer})
}

const deleteCustomer = async (req,res) =>{
    let customer = await customerModel.findOneAndUpdate({_id: req.body.id, isDeleted : false})
    if(!customer) return res.status(404).send({status: false, message : "Customer Details Not Found"})
    return res.status(200).send({status : true, message : "Successfully Deleted !!!"})
}

module.exports ={
    getCustomerList,
    getCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}