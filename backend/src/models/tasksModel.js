const connection = require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks')
    console.log('tasks - getAll')
    return tasks[0]
}

const createTask = async (task) => {
    const {title} = task;
    const dateUTC = new Date().toUTCString();
    const query = 'INSERT INTO tasks(title, status, created_at) VALUES (?,?,?)'
    const createdTask = await connection.execute(query,[title,'pendente',dateUTC])
    console.log(`Create task: ${title}`)
    return createdTask
}

const deleteTask = async (id) =>{
    const deletedTask = await connection.execute('DELETE FROM tasks WHERE id = ?',[id])
    return deletedTask
}


module.exports = {
    getAll,
    createTask,
    deleteTask,
}