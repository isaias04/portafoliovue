<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

// Agregamos el ícono a la librería
library.add(faGraduationCap)

// Tu array educacion
const educacion = [
  {
    institucion: 'Universidad Gerardo Barrios',
    titulo: 'Ingeniería en Sistemas y redes informáticas',
    periodo: '2019 - 2025',
    descripcion: 'Formacion en la gestion de sistemas iformaticos y infraestructura de redes informaticas.'
  },
  {
    institucion: 'Instituto Nacional de Chapeltique INCHAPEL',
    titulo: 'Bachillerato tecnico opcion Contador',
    periodo: '2011 - 2014',
    descripcion: 'Formacion en contabilidad y administracion de empresas, con un enfoque en la gestion financiera y contable.'
  }, 
]
</script>


<template>
  <section id="educacion" class="educacion-container">
    <h2 data-aos="fade-up">Educación</h2>
    <div class="lista-educacion">
      <article
        v-for="(item, i) in educacion"
        :key="i"
        class="educacion-item"
        :data-aos="'fade-up'"
        :data-aos-delay="i * 150"
      >
        <h3>
          <font-awesome-icon icon="graduation-cap" style="margin-right: 8px; color: #f9a826;" />
          {{ item.titulo }}
        </h3>
        <p class="institucion">{{ item.institucion }}</p>
        <p class="periodo">{{ item.periodo }}</p>
        <p class="descripcion">{{ item.descripcion }}</p>
      </article>
    </div>
  </section>
</template>


<style scoped>
.educacion-container {
  max-width: 900px;
  margin: 3rem auto;
  padding: 0 1rem;
  color: #f3f3f3;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  text-align: center;
  font-size: 2.3rem;
  color: #f9a826;
  margin-bottom: 2.5rem;
  text-shadow: 0 0 10px #f9a826;
  letter-spacing: 1.2px;
}

.lista-educacion {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.educacion-item {
  background: linear-gradient(135deg, #1e1e1e, #282828);
  padding: 2rem 2.5rem;
  border-radius: 18px;
  box-shadow: 0 10px 20px rgba(249, 168, 38, 0.25);
  transition: box-shadow 0.35s ease, transform 0.35s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.educacion-item:hover {
  box-shadow:
    0 15px 30px rgba(249, 168, 38, 0.6),
    0 7px 14px rgba(249, 168, 38, 0.4);
  transform: translateY(-6px);
  cursor: pointer;
}

.educacion-item h3 {
  margin: 0 0 0.5rem 0;
  color: #f9a826;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.8px;
}

.institucion {
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0.4rem;
  color: #d6b54e;
  font-size: 1.05rem;
}

.periodo {
  font-size: 0.9rem;
  color: #b3a658;
  margin-bottom: 1.2rem;
  font-weight: 500;
}

.descripcion {
  font-size: 1rem;
  line-height: 1.5;
  color: #ddd;
  flex-grow: 1;
  user-select: none;
}

/* 📱 Responsivo para pantallas más pequeñas */
@media (max-width: 420px) {
  .lista-educacion {
    grid-template-columns: 1fr; /* una tarjeta por fila */
    gap: 1rem;
  }

  .educacion-item {
    padding: 1rem 1rem;
  }

  h2 {
    font-size: 1.7rem;
  }

  .educacion-item h3 {
    font-size: 1.2rem;
  }

  .descripcion {
    font-size: 0.9rem;
  }
}
</style>
