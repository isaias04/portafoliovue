<script setup>
import { ref } from 'vue';
const navegacion = ref([
  { id: 1, nombre: 'Home', enlace: '#Home' },
  { id: 2, nombre: 'Experiencia', enlace: '#Experiencia' },
  { id: 3, nombre: 'Educación', enlace: '#Educación' },
  { id: 4, nombre: 'Portafolio', enlace: '#Portafolio' },
  { id: 5, nombre: 'Contact', enlace: '#Contact' }
]);
</script>

<template>
  <nav class="navbar">
    <div class="navbar-menu">
      <ul class="nav-list">
        <li v-for="nav in navegacion" :key="nav.nombre">
          <a :href="nav.enlace" class="nav-item">{{ nav.nombre }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  padding: 1rem 2rem;
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  z-index: 1000;
  
}

.navbar-menu {
  max-width: 1200px;
  margin: 0 auto;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  color: #f0f0f0;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s ease;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, #f5c542, #ff8a00);
  transition: width 0.4s ease;
}

.nav-item:hover {
  color: #ff9e42;
}

.nav-item:hover::after {
  width: 100%;
}
</style>


