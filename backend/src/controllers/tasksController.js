const model = require('../models/tasksModel')

const getAll = async (request, response) => {
    const tasks = await model.getAll()
    return response.status(200).json(tasks)
}

module.exports = {
    getAll
}