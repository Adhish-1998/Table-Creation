const addressModel = require("../Models/addressModel")

const insertAddress = async(req,res) =>{
    try{
        let data = await addressModel.create(req.body)
    return res.status(201).send({status : true, data : data})
    }
    catch (err){
        return res.status(500).send({ status: false, message: err.message })
    }
    
}

module.exports.insertAddress = insertAddress