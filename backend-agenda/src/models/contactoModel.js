import db from '../config/db.js';

export async function getAll() {
    const [rows] = await db.query('SELECT * FROM contactos');
    return rows;
}

export async function getById(id) {
    const [rows] = await db.query('SELECT * FROM contactos WHERE id = ?', [id]);
    return rows[0];
}

export async function create(contacto) {
    const { nombre, apellido, telefono } = contacto;
    const [result] = await db.query('INSERT INTO contactos (nombre, apellido, telefono) VALUES (?, ?, ?)', [nombre, apellido, telefono]);
    return {id: result.insertId, ...contacto}
}

export async function update(id, contacto) {
    const { nombre, apellido, telefono } = contacto;
    const [result] = await db.query('UPDATE contactos SET nombre = ?, apellido = ?, telefono = ? WHERE id = ?', [nombre, apellido, telefono, id]);
    return {id, ...contacto};
}

export async function remove(id) {
    const [result] = await db.query('DELETE FROM contactos WHERE id = ?', [id]);
    return {message:'Contacto eliminado correctamente'}
}
