<template>
    <div class="modal">
      <div class="modal-content">
        <p>¿Está seguro de que desea cerrar sesión?</p>
        <div class="modal-buttons">
          <button @click="$emit('logout')">Sí</button>
          <button @click="$emit('close')">No</button>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba}
    </style>