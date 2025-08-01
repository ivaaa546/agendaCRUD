<template>
    <form @submit.prevent="onSubmit">
      <input v-model="contacto.nombre" placeholder="Nombre" required />
      <input v-model="contacto.apellido" placeholder="Apellido" required />
      <input v-model="contacto.telefono" placeholder="Teléfono" required />
      <button type="submit">{{ contacto.id ? 'Actualizar' : 'Agregar' }}</button>
      <button type="button" @click="limpiar">Cancelar</button>
    </form>
  </template>
  
  <script setup>
  import { reactive, watch, toRefs } from 'vue'
  const props = defineProps(['editar'])
  const emit = defineEmits(['guardar'])
  
  const contacto = reactive({ id: null, nombre: '', apellido: '', telefono: '' })
  
  watch(() => props.editar, (nuevo) => {
    if (nuevo) Object.assign(contacto, nuevo)
  })
  
  function onSubmit() {
    emit('guardar', { ...contacto })
    limpiar()
  }
  
  function limpiar() {
    Object.assign(contacto, { id: null, nombre: '', apellido: '', telefono: '' })
  }
  </script>
  