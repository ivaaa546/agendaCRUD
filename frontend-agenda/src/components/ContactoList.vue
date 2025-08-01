<template>
    <ul>
      <li v-for="c in contactos" :key="c.id">
        {{ c.nombre }} {{ c.apellido }} - {{ c.telefono }}
        <button @click="$emit('editar', c)">Editar</button>
        <button @click="$emit('eliminar', c.id)">Eliminar</button>
      </li>
    </ul>
  </template>
  
  <script setup>
  defineProps(['contactos'])
  defineEmits(['editar', 'eliminar'])
  </script>
  