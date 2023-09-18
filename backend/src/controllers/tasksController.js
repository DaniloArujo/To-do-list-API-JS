const model = require('../models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await model.getAll()
    return response.status(200).json(tasks)
}

const createTask = async(request, response) => {
    const createdTask = await model.createTask(request.body)
    return response.status(201).json(createdTask)
}

const deleteTask = async(request, response) => {
    const {id}  = request.params
    await model.deleteTask(id)
    return response.status(204).json()
}


module.exports = {
    getAll,
    createTask,
    deleteTask
}