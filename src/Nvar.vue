<script setup>
import { ref } from 'vue';

const navegacion = ref([
  { id: 1, nombre: 'Home', enlace: '#Home' },
  { id: 2, nombre: 'Experiencia', enlace: '#Experiencia' },
  { id: 3, nombre: 'Educación', enlace: '#Educación' },
  { id: 4, nombre: 'Portafolio', enlace: '#Portafolio' },
  { id: 5, nombre: 'Contact', enlace: '#Contact' }
]);

const menuAbierto = ref(false);

const toggleMenu = () => {
  menuAbierto.value = !menuAbierto.value;
};
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <!-- Botón hamburguesa -->
      <button class="hamburger" @click="toggleMenu">
        <span :class="{ 'active': menuAbierto }"></span>
        <span :class="{ 'active': menuAbierto }"></span>
        <span :class="{ 'active': menuAbierto }"></span>
      </button>

      <!-- Menú -->
      <ul class="nav-list" :class="{ 'open': menuAbierto }">
        <li v-for="nav in navegacion" :key="nav.nombre">
          <a :href="nav.enlace" class="nav-item" @click="menuAbierto = false">{{ nav.nombre }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
/* Contenedor principal */
.navbar {
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.05); /* fondo translúcido */
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: none; /* sin bordes visibles */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* sombra muy suave */
  border-radius: 0; /* sin esquinas redondeadas */
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center; /* menú centrado en PC */
  align-items: center;
}

.nav-list {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  justify-content: center;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background: #f0f0f0;
  transition: all 0.3s ease;
}

.hamburger span.active:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger span.active:nth-child(2) {
  opacity: 0;
}

.hamburger span.active:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Menú */
.nav-list {
  display: flex;
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

/* Responsive */
@media (max-width: 768px) {
  .navbar {
    background: rgba(15, 14, 14, 0.9); /* fondo sólido oscuro en móvil */
    backdrop-filter: none; /* quitar blur en móvil */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
  }
  .navbar-container {
    justify-content: flex-end;
  }

  .hamburger {
    display: flex;
  }

  .nav-list {
    position: absolute; /* posición relativa al navbar */
    top: 70px;          /* justo debajo del navbar */
    right: 0;
    left: 0;            /* ancho completo */
    background: rgba(0, 0, 0, 0.95); /* fondo oscuro */
    flex-direction: column;
    padding: 1rem 0;    /* arriba y abajo, nada en los lados para que ocupe todo el ancho */
    display: none;
    z-index: 1500;
    border-radius: 0 0 10px 10px; /* bordes redondeados abajo */
    box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  }

  .nav-list.open {
    display: flex;
  }

  .nav-item {
    padding: 1rem 2rem; /* más relleno lateral para que se vea bien */
    font-size: 1.2rem;
    border-bottom: 1px solid #444;
  }
}



</style>


