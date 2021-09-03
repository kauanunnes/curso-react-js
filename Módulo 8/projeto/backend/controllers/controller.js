const db = require('../config/db.config.js')

const Cliente = db.Cliente

exports.createCliente = (req, res) => {
    let cliente = {}

    try{
        cliente.nome = req.body.nome
        cliente.email = req.body.email
        cliente.idade = req.body.idade
        

        Cliente.create(cliente,
            {attributes: ['id','nome','email','idade']})
            .then(result => {
                res.status(200).json(result)
            })
    
    
    }catch(error){
        res.status(500).json({
            message: "Fail",
            error: error.message
        })
    }

}

exports.getCliente = (req, res) => {
    Cliente.findByPk(req.params.id,
        {attributes: ['id','nome','email','idade']})
        .then(cliente => {
            res.status(200).json(cliente)

        }).catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Error!",
                error: error
            })
        })
}

exports.clientes = (req,res) => {
    try{
        Cliente.findAll({attributes: ['id','nome','email','idade']})
        .then(clientes => {
            res.status(200).json(clientes)
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            message: "Error!",
            error: error
        })
    }
}

exports.deleteCliente = async (req, res) => {
    try{
        let clienteId = req.params.id
        let cliente = await Cliente.findByPk(clienteId)

        if(!cliente){
            res.status(400).json({
                message: "Não existe nenhum cliente com o ID: " + clienteId,
                error: "404"
            })
        } else {
            await cliente.destroy()
            res.status(200).json("Cliente deletado com sucesso")
        }
    }catch(error){
        res.status(500).json({
            message: "Error => Não foi possível deletar o cliente com o ID:" + req.params.id,
            error: error
        })
    }
}

exports.updateCliente = async (req, res) => {
    try{
        let cliente = await Cliente.findByPk(req.body.id)
        if(!cliente){
            res.status(400).json({
                message: "Não foi encontrado nenhum cliente com o ID: " + clienteId,
                error: "404"
            })
        } else{
            let updateObject = {
                nome: req.body.nome,
                email: req.body.email,
                idade: req.body.idade,
            }

            let result = await Cliente.update(updateObject, {
                returning: true,
                where: {id: req.body.id},
                attributes: ['id','nome','email','idade']
            })

            if(!result){
                res.status(500).json({
                    message: "Error => Não houve alteração no cliente com o ID:" + req.params.id,
                    error: error
                })
            }
            res.status(200).json("Cliente alterado com sucesso.")
        }
    }catch(error){
        res.status(500).json({
            message: "Error => Não foi possível alterar o cliente com o ID:" + req.params.id,
            error: error
        })
    }
}