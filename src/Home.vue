<script setup>
import avatar from '@/assets/perfil.png'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLaravel, faVuejs, faPhp, faHtml5, faCss3Alt, faJs, faGithub, faPython, faBootstrap,
  faWhatsapp, faLinkedin} from '@fortawesome/free-brands-svg-icons'

library.add(faLaravel, faVuejs, faPhp, faHtml5, faCss3Alt, faJs, faGithub, faPython, faBootstrap, 
  faEnvelope, faWhatsapp, faLinkedin, )
 
const perfil = {
  nombre: 'ISAIAS SEGOVIA',
  profesion: ['Ingeniero en Sistemas', 'Desarrollador Web', 'Freelancer'],
  avatar
}

const contactos = [
  {
    tipo: 'Email',
    valor: 'isaiassegovia2019@gmail.com',
    icono: ['fas', 'envelope'],  // faEnvelope
    url: 'mailto:isaiassegovia2019@gmail.com?subject=Solicitud...'
  },
  {
    tipo: 'GitHub',
    valor: 'isa04',
    icono: ['fab', 'github'],  // faGithub
    url: 'https://github.com/isaias04'
  },
  {
  tipo: 'LinkedIn',
  valor: 'Isaias Segovia',
  icono: ['fab', 'linkedin'],
  url: 'https://www.linkedin.com/in/isaias-segovia-8b5735325/'
},
  {
    tipo: 'WhatsApp',
    valor: '503+7970-5056',
    icono: ['fab', 'whatsapp'],  // faWhatsapp
    url: 'https://wa.me/50379705056'  // enlace correcto para WhatsApp
  },
]

const habilidades = [
  {
    nombre: 'Laravel',
    descripcion: ' intermedio.',
    icono: ['fab', 'laravel'],
    color: '#f55247',
    nivel: 60,
    
  },
  {
    nombre: 'Vue JS',
    descripcion: 'Nivel avanzado.',
    icono: ['fab', 'vuejs'],
    color: '#42b883',
    nivel: 80,
  }
]

const iconosCarrusel = [
  { icono: ['fab', 'php'], color: '#8993be' },
  { icono: ['fab', 'html5'], color: '#e34c26' },
  { icono: ['fab', 'css3-alt'], color: '#264de4' },
  { icono: ['fab', 'js'], color: '#f0db4f' },
  { icono: ['fab', 'github'], color: '#ffffff' },
  { icono: ['fab', 'python'], color: '#306998' },
  { icono: ['fab', 'bootstrap'], color: '#563d7c' }
]
</script>

<template>
  <div class="layout">
    <!-- Columna izquierda -->
    <aside class="perfil">
      <img :src="perfil.avatar" alt="Avatar" class="avatar" />
      <h2>{{ perfil.nombre }}</h2>
      <div class="profesion" v-for="rol in perfil.profesion" :key="rol">{{ rol }}</div>
        <div class="contacto" v-for="contacto in contactos" :key="contacto.tipo"> <div class="icono">
          <font-awesome-icon v-if="Array.isArray(contacto.icono)" :icon="contacto.icono" />
          <span v-else>{{ contacto.icono }}</span>
        </div>
        <div class="contacto-detalle">
          <small>{{ contacto.tipo }}</small>
          <p><a :href="contacto.url" target="_blank">{{ contacto.valor }}</a></p>
        </div>
      </div>
    </aside>

    <!-- Columna derecha -->
    <main class="contenido">
      <h1>Sobre mí</h1>
      <p>
        Soy estudiante de Ingeniería en Sistemas y Redes Informáticas,
        recien egresado de la Universidad Gerardo Barrios, de San Miguel el Salvador. <br>
        Cuento con experiencia en desarrollo web utilizando Vue.js para frontend y Laravel para backend. Manejo el desarrollo de interfaces interactivas y 
        responsivas, así como la creación de APIs RESTful y gestión de bases de datos con Laravel..
      </p>

      <h2>Framework que domino</h2>
      <div class="tarjetas" >
        <div class="tarjeta" v-for="item in habilidades" :key="item.nombre" >
          <div class="icono-grande">
            <font-awesome-icon
              v-if="Array.isArray(item.icono)" :icon="item.icono" :style="{ color: item.color }"
            />
          </div>
          <div class="contenido-tarjeta">
            <h3 class="titulo-habilidad">{{ item.nombre }}</h3>
            <p>{{ item.descripcion }}</p>
            <div class="barra-nivel">
              <div class="progreso" :style="{ width: item.nivel + '%', backgroundColor: item.color }"></div>
            </div>
          </div>
        </div>
      </div>

      <h2>Tecnologías que domino</h2>
      <div class="carrusel-contenedor">
        <div class="carrusel-slide">
          <div
            class="icono-carrusel"
            v-for="(icono, index) in [...iconosCarrusel, ...iconosCarrusel]"
            :key="index"
          >
            <font-awesome-icon :icon="icono.icono" :style="{ color: icono.color }" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.layout {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  background: #0f0f0f;
  color: #f3f3f3;
  padding: 2rem;
  min-height: 100vh;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.perfil {
  background: #1e1e1e;
  padding: 2rem 1.5rem;
  border-radius: 20px;
  width: 300px;
  flex-shrink: 0;
  text-align: center;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

h2 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  color: #f9a826;
  font-weight: bold;
  border-color: rgb(241, 227, 227);
  text-align: left;
}

.profesion {
  background: #292929;
  padding: 0.5rem;
  border-radius: 10px;
  margin-top: 0.3rem;
  font-size: 0.9rem;
}

.contacto {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  background: #454545;
  padding: 0.6rem;
  border-radius: 10px;
}

.contacto a {
  color: #fffefb;
  text-align: left;
  text-decoration: none;
}

.icono {
  font-size: 1.5rem;
  background: #382626;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.contacto-detalle small {
  font-size: 0.65rem;
  color: #f9a826;
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  margin-bottom: 0.2rem;
  text-align: left;
}

.contacto-detalle p {
  margin: 0;
  font-size: 0.85rem;
}

.contenido {
  flex: 1;
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
}

.contenido h1 {
  font-size: 2rem;
  color: #f9a826;
  margin-bottom: 1rem;
}

.contenido h2 {
  margin-top: 2rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #333;
  padding-bottom: 0.5rem;
  justify-content: left;
}

.contenido p {
  margin-top: 0.5rem;
  line-height: 1.6;
  color: #ffffff;
}

.tarjetas {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.tarjeta {
  display: flex;
  align-items: center;
  background: #252525;
  padding: 1rem;
  border-radius: 15px;
  box-shadow: 0 0 10px #00000040;
  flex: 1 1 calc(50% - 0.75rem);
  max-width: calc(50% - 0.75rem);
  min-height: 140px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarjeta:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(247, 198, 94, 0.7);
  cursor: pointer;
}

.tarjeta.laravel:hover {
  box-shadow:
    0 0 15px 5px rgba(245, 82, 71, 0.6),
    0 0 30px 10px rgba(245, 82, 71, 0.3);
  transform: scale(1.05);
  cursor: pointer;
}

.tarjeta.vuejs:hover {
  box-shadow:
    0 0 15px 5px rgba(66, 184, 131, 0.6),
    0 0 30px 10px rgba(66, 184, 131, 0.3);
  transform: scale(1.05);
  cursor: pointer;
}

.icono-grande:hover svg {
  animation: rotar-suave 2s infinite ease-in-out;
}

.icono-grande {
  font-size: 4rem;
  flex: 0 0 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contenido-tarjeta {
  flex: 1;
  padding-left: 1rem;
}

.titulo-habilidad {
  font-size: 1.3rem;
  color: #f3f3f3;
  margin: 0 0 0.5rem;
  text-align: left;
}

.tarjeta p {
  color: #ccc;
  margin: 0;
  line-height: 1.5;
}

@keyframes rotar-suave {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.barra-nivel {
  width: 100%;
  height: 12px;
  background-color: #444;
  border-radius: 8px;
  margin-top: 0.7rem;
  overflow: hidden;
}

.progreso {
  height: 100%;
  border-radius: 8px 0 0 8px;
  transition: width 0.5s ease;
}

.carrusel-contenedor {
  overflow: hidden;
  margin-top: 5rem;
  width: 100%;
  background: #242323;
  border-radius: 15px;
  padding: 0.2rem 0;
  box-shadow: inset 0 0 10px #00000080;
}

.carrusel-slide {
  display: flex;
  gap: 1rem;
  width: max-content;
  animation: desplazamiento 30s linear infinite;
  box-sizing: content-box;
}

@keyframes desplazamiento {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.icono-carrusel {
  font-size: clamp(2rem, 5vw, 3rem);
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  filter: drop-shadow(0 0 2px #000);
}

/* Responsive */
@media (max-width: 768px) {
  .layout {
    flex-direction: column;
    padding: 1rem;
  }

  .perfil {
    width: 100%;
    margin-bottom: 2rem;
  }

  .contenido {
    padding: 1rem;
  }

  .tarjeta {
    flex-direction: column;
    align-items: flex-start;
    flex: 1 1 100%;
    max-width: 100%;
  }

  .icono-grande {
    font-size: 3rem;
    margin-bottom: 1rem;
    justify-content: flex-start;
  }

  .contenido-tarjeta {
    padding-left: 0;
  }

  .carrusel-contenedor {
    padding: 1rem 0;
  }
}
</style>

