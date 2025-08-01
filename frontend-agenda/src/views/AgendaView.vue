<template>
    <h1>Agenda de Contactos</h1>
    <ContactoForm :editar="enEdicion" @guardar="guardarContacto" />
    <ContactoList :contactos="contactos" @editar="enEdicion = $event" @eliminar="eliminarContactoPorId"
/>
  </template>
  
<script setup>
  import { ref, onMounted } from 'vue'
  import ContactoForm from '../components/ContactoForm.vue'
  import ContactoList from '../components/ContactoList.vue'
  
  import {
    obtenerContactos,
    crearContacto,
    actualizarContacto,
    eliminarContacto
  } from '../services/api.js'
  
  const contactos = ref([])
  const enEdicion = ref(null)
  
  async function cargarContactos() {
    contactos.value = await obtenerContactos()
  }
  
  async function guardarContacto(contacto) {
    if (contacto.id) {
      await actualizarContacto(contacto.id, contacto)
    } else {
      const nuevo = await crearContacto(contacto)
      contactos.value.push(nuevo)
    }
    enEdicion.value = null
    cargarContactos()
  }
  
  async function eliminarContactoPorId(id) {
    await eliminarContacto(id)
    contactos.value = contactos.value.filter(c => c.id !== id)
  }
  
  onMounted(cargarContactos)
  </script>
  