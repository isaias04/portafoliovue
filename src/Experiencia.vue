<script setup>
const proyectos = [
  {
    empresa: "Tech Solutions",
    proyecto: "Sistema de Reservas",
    fechaInicio: "Enero 2023",
    fechaFin: "Junio 2023",
    descripcion: "Desarrollo de plataforma web para gestión de reservas online con notificaciones en tiempo real."
  },
  {
    empresa: "Innovatech",
    proyecto: "E-commerce Avanzado",
    fechaInicio: "Marzo 2022",
    fechaFin: "Diciembre 2022",
    descripcion: "Creación de tienda online con carrito, pagos integrados y panel de administración personalizado."
  },
  {
    empresa: "WebWorks",
    proyecto: "Portal Educativo",
    fechaInicio: "Julio 2021",
    fechaFin: "Enero 2022",
    descripcion: "Implementación de portal para cursos online con sistema de evaluación y certificación."
  },
  {
    empresa: "DigitalCraft",
    proyecto: "Landing Page Corporativa",
    fechaInicio: "Agosto 2020",
    fechaFin: "Octubre 2020",
    descripcion: "Diseño y desarrollo de landing page responsiva para marca con optimización SEO."
  }
];
</script>

<template>
  <section id="experiencia" class="experiencia-container">
    <h2>Experiencia Profesional</h2>
    <div class="columnas">
      <div class="columna">
        <div v-for="(proyecto, index) in proyectos.slice(0,2)" :key="index" class="proyecto-card" tabindex="0">
          <h3>{{ proyecto.proyecto }}</h3>
          <p class="empresa">{{ proyecto.empresa }}</p>
          <p class="fechas">{{ proyecto.fechaInicio }} - {{ proyecto.fechaFin }}</p>
          <p class="descripcion">{{ proyecto.descripcion }}</p>
        </div>
      </div>

      <div class="linea-separadora"></div>

      <div class="columna">
        <div v-for="(proyecto, index) in proyectos.slice(2,4)" :key="index" class="proyecto-card" tabindex="0">
          <h3>{{ proyecto.proyecto }}</h3>
          <p class="empresa">{{ proyecto.empresa }}</p>
          <p class="fechas">{{ proyecto.fechaInicio }} - {{ proyecto.fechaFin }}</p>
          <p class="descripcion">{{ proyecto.descripcion }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experiencia-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
  color: #f3f3f3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  font-size: 2rem;
  color: #f9a826;
  margin-bottom: 2rem;
  text-shadow: 0 0 8px #f9a826;
}

.columnas {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
}

.columna {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Línea vertical separadora */
.linea-separadora {
  width: 2px;
  background: linear-gradient(to bottom, #f9a826, transparent, #f9a826);
  border-radius: 1px;
  margin: 0 1rem;
}

/* Tarjetas */
.proyecto-card {
  background: #2c2c2c;
  padding: 1.8rem 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(249, 168, 38, 0.3);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 230px;
  animation: entradaTarjeta 0.6s ease forwards;
  outline: none;
}

.proyecto-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 12px 24px rgba(249, 168, 38, 0.6),
    0 6px 12px rgba(249, 168, 38, 0.4);
}

/* Animación extra al hacer click (tap) */
.proyecto-card:active {
  transform: scale(0.95) translateY(4px);
  transition: transform 0.15s ease;
}

.proyecto-card h3 {
  margin: 0 0 0.3rem 0;
  color: #f9a826;
  font-weight: 700;
  font-size: 1.3rem;
}

.empresa {
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0.3rem;
  color: #ccc;
}

.fechas {
  font-size: 0.85rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.descripcion {
  flex-grow: 1;
  font-size: 1rem;
  line-height: 1.4;
  color: #e0e0e0;
}

/* Animación entrada */
@keyframes entradaTarjeta {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Escalonar animación */
.columna:nth-child(1) .proyecto-card:nth-child(1) {
  animation-delay: 0.2s;
}
.columna:nth-child(1) .proyecto-card:nth-child(2) {
  animation-delay: 0.4s;
}
.columna:nth-child(3) .proyecto-card:nth-child(1) {
  animation-delay: 0.6s;
}
.columna:nth-child(3) .proyecto-card:nth-child(2) {
  animation-delay: 0.8s;
}

/* Responsive */
@media (max-width: 768px) {
  .columnas {
    flex-direction: column;
  }
  .linea-separadora {
    display: none;
  }
  .columna {
    width: 100%;
  }
  .proyecto-card {
    min-height: auto;
  }
}
</style>


