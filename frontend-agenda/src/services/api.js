// src/services/contactoService.js
import axios from 'axios'

const API_URL = 'http://localhost:3000/contactos'

export async function obtenerContactos() {
  const res = await axios.get(API_URL)
  return res.data
}

export async function crearContacto(contacto) {
  const res = await axios.post(API_URL, contacto)
  return res.data
}

export async function actualizarContacto(id, contacto) {
  await axios.put(`${API_URL}/${id}`, contacto)
}

export async function eliminarContacto(id) {
  await axios.delete(`${API_URL}/${id}`)
}
