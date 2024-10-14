<template>
  <span>Nota 1:</span>
  <input v-model="nota1">
  <span>Nota 2:</span>
  <input v-model="nota2">
  <span>Nota 3:</span>
  <input v-model="nota3">
  <span>Nota 4:</span>
  <input v-model="nota4">
  <span>Nota 5:</span>
  <input v-model="nota5">
  <span>Nota 6:</span>
  <input v-model="nota6">
  
  <button @click="calcularPromedio">
    Calcular promedio
  </button>
  <span>El promedio es: {{ promedio }}</span>

  
  <button @click="obtenerTodo">
    Obtener todo
  </button>

  <button @click="obtenerNotas">
    Obtener Notas de Alumno
  </button>
    <button @click="obtenerAprobados">
      Obtener aprobados
    </button>
</template>

<style scoped>

</style>

<script setup>
import datosAlumnos from '@/assets/datosAlumnos.json';
import { ref } from "vue";

const alumnos = ref(datosAlumnos.alumnos);

const nota1 = ref(0);
const nota2 = ref(0);
const nota3 = ref(0);
const nota4 = ref(0);
const nota5 = ref(0);
const nota6 = ref(0);

const promedio = ref(0);

const calcularPromedio = () => {
  promedio.value = (parseFloat(nota1.value) * 0.2 + parseFloat(nota2.value) * 0.2 + parseFloat(nota3.value) * 0.2 + parseFloat(nota4.value) * 0.2 + parseFloat(nota5.value) * 0.1 + parseFloat(nota6.value) * 0.1);
}

</script>