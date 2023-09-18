const express = require('express')
const tasksController = require('./controllers/tasksController')

const router = express.Router()

//router.get('/exemplos', (req,res) => {

    //validar, chamar outras funções, 
    //pegar o retorno dessas funções, 
    //responder o usuário(response)

//})

router.get('/tasks',tasksController.getAll)
router.post('/tasks',tasksController.createTask)
router.delete('/tasks/:id',tasksController.deleteTask)



module.exports = router