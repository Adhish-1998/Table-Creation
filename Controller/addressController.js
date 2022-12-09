const addressModel = require("../Models/addressModel")

const insertAddress = async(req,res) =>{
    let data = await addressModel.create(req.body)
    return res.status(201).send({status : true, data : data})
}

module.exports.insertAddress = insertAddress