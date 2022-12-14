const customerModel = require("../Models/customerModel")

const getCustomerList = async (req, res) => {
    try {
        let customerList = await customerModel.find({ isDeleted: false })
        return res.status(200).send({ status: true, data: customerList })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

const getCustomer = async (req, res) => {

    try {
        let customer = await customerModel.findOne({ _id: req.body.id, isDeleted: false })
        return res.status(200).send({ status: true, data: customer })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

const insertCustomer = async (req, res) => {
    try {
        let customer = await customerModel.create(req.body)
        return res.status(201).send({ status: true, data: customer })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

const updateCustomer = async (req, res) => {
    try {
        let updateObj = {}
        if (req.body.firstName) updateObj['firstName'] = req.body.firstName
        if (req.body.lastName) updateObj['lastName'] = req.body.lastName
        if (req.body.dob) updateObj['dob'] = req.body.dob
        if (req.body.gender) updateObj['gender'] = req.body.gender
        if (req.body.password) updateObj['password'] = req.body.password

        let updatedCustomer = await customerModel.findOneAndUpdate(
            { _id: req.params.id },
            { updateObj },
            { new: true }
        )

        return res.status(200).send({ status: true, data: updatedCustomer })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

const deleteCustomer = async (req, res) => {
    try {
        let customer = await customerModel.findOneAndUpdate(
            { _id: req.body.id, isDeleted: false },
            { $set: { isDeleted: true } }
        )
        if (!customer) return res.status(404).send({ status: false, message: "Customer Details Not Found" })
        return res.status(200).send({ status: true, message: "Successfully Deleted !!!" })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }

}

module.exports = {
    getCustomerList,
    getCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer
}