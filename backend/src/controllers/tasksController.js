const getAll = (request, response) => {
    return response.status(200).json({message: 'Controller está tudo certo'})
}

module.exports = {
    getAll
}