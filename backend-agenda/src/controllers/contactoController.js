import { getAll, getById, create, update, remove } from '../models/contactoModel.js';


export async function getContactos(req, res) {
    try{
        const contactos  =  await getAll();
        res.json(contactos);
    }
    catch(error){
        res.status(500).json({message: 'Error al obtener los usuarios'});
    }
}

export async function getContactoById(req, res) {
    try{
       
        const contacto = await getById(req.params.id);
        if(!contacto){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.json(contacto);
    }
    catch(error){
        res.status(500).json({message: 'Error al obtener al usuario'});
    }
}


export async function createContacto(req, res) {
    try{
     
        const nuevoContacto = await create(req.body);
        res.status(201).json(nuevoContacto);
    }
    catch(error){
        res.status(500).json({message: 'Error al crear el usuario'});
    }
}

export async function updateContacto(req, res) {
    try{
        const actualizadoContacto = await update(req.params.id, req.body);
        res.json(actualizadoContacto);
    }
    catch(error){
        res.status(500).json({message: 'Error al actualizar el usuario'});
    }
}

export async function deleteContacto(req, res) {
    try{
        const eliminadoContacto = await remove(req.params.id);
        res.json(eliminadoContacto);
    }
    catch(error){
        res.status(500).json({message: 'Error al eliminar el usuario'});
    }
}

