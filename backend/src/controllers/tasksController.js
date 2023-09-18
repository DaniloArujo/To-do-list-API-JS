const model = require('../models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await model.getAll()
    return response.status(200).json(tasks)
}

const createTask = async(request, response) => {
    const createdTask = await model.createTask(request.body)
    return response.status(201).json(createdTask)
}

module.exports = {
    getAll,
    createTask
}