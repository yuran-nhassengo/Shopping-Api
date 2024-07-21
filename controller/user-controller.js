const getAllUsers = (req,res) => {
    res.status(200).json({message: 'Obter todos Usuarios'})
};

const getUser = (req,res) =>{
    res.status(200).json({
        message: `Obter tarefa ${req.params.id}`
    });
};

const createUser = (req,res) => {
    res.status(200).json({
        message:"Usuario criado com sucesso",
    data:req.body});
};

const updateUser = (req,res) => {
    res.status(200).json({message: `Actualizar
        tarefa ${req.params.id}`});
};

const deleteUser = (req,res) => {
    res.status(200).json({message: `Eliminar uma tarefa ${req.params.id}`});
};

module.exports = {getAllUsers,getUser,deleteUser,createUser,updateUser};