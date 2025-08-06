<script setup>
const proyectos = [
  {
    titulo: 'Sheet Recognizer',
    tecnologias: ['Computer Vision', 'OpenCV', 'AI', 'Flask', 'Sockets'],
    descripcion: 'Music Sheet Recognizer (MSR) aplica técnicas básicas de procesamiento y reconocimiento de imágenes. Similar al OCR pero para partituras musicales.',
    imagen: 'https://miro.medium.com/v2/resize:fit:600/1*evMJnQOBQgrgzNtMkRL9Ng.png',
    repositorio: 'https://github.com/tu_usuario/sheet-recognizer'
  },
  {
    titulo: 'Portfolio Web',
    tecnologias: ['Vue.js', 'Tailwind CSS', 'Vite'],
    descripcion: 'Portafolio personal moderno, responsivo y optimizado, ideal para mostrar tus habilidades y proyectos como desarrollador.',
    imagen: 'https://portafodigital.wordpress.com/wp-content/uploads/2013/05/portafolio-web.png',
    repositorio: 'https://github.com/tu_usuario/portfolio'
  },
  {
    titulo: 'Chat App',
    tecnologias: ['Node.js', 'Socket.io', 'Express', 'JavaScript'],
    descripcion: 'Aplicación de chat en tiempo real, perfecta para entender el manejo de WebSockets y eventos en el servidor.',
    imagen: 'https://cdn-icons-png.flaticon.com/512/6072/6072846.png',
    repositorio: 'https://github.com/tu_usuario/chat-app'
  }
];
</script>

<template>
  <section class="proyectos">
    <h2>Mis Proyectos</h2>
    <div class="tarjetas">
      <div class="tarjeta" v-for="(proyecto, index) in proyectos" :key="index">
        <div class="img-container">
          <img :src="proyecto.imagen" :alt="`Imagen de ${proyecto.titulo}`" />
        </div>
        <h3>{{ proyecto.titulo }}</h3>
        <ul class="tecnologias">
          <li v-for="(tech, i) in proyecto.tecnologias" :key="i">{{ tech }}</li>
        </ul>
        <p class="descripcion">{{ proyecto.descripcion }}</p>
        <a :href="proyecto.repositorio" target="_blank" rel="noopener" class="boton">Ver en GitHub</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.proyectos {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

h2 {
  font-size: 2.5rem;
  color: #f9a826;
  text-align: center;
  margin-bottom: 2.5rem;
}

.tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  align-items: stretch;
}

.tarjeta {
    background-color: #1a1a1a;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  flex: 1 1 calc(33.333% - 1.5rem);
  display: flex;
  flex-direction: column;
  max-width: 100%;
  transition: transform 0.3s ease;
  min-height: 450px;
}

.img-container {
  overflow: hidden;
  perspective: 800px; /* Clave para animación 3D */
}

.tarjeta img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.tarjeta:hover img {
  transform: rotateY(180deg);
}

.tarjeta h3 {
  margin: 1rem;
  color: #f9a826;
  font-size: 1.2rem;
}

.tarjeta p {
  margin: 0 1rem 1rem;
  color: #ccc;
  font-size: 0.9rem;
  line-height: 1.4;
}

.tecnologias {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  padding: 0 1rem;
  margin: 0.5rem 0;
}

.tecnologias li {
  background-color: #333;
  color: #f9a826;
  font-size: 0.75rem;
  padding: 0.3rem 0.6rem;
  border-radius: 0.4rem;
}

.boton {
  margin: auto 1rem 1rem 1rem;
  background-color:transparent;
  border: solid 2px #f9a826;
  color: #d7d5d5;
  padding: 0.5rem 1rem;
  border-radius: 0.6rem;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s;
  display: inline-block;
  align-self: flex-start;
  margin-top: auto;
}

.boton:hover {
  background-color: #d88e1d;
  color: #fff;
}

/* Responsive */
@media (max-width: 1024px) {
  .tarjeta {
    flex: 1 1 calc(50% - 1.5rem);
  }
}

@media (max-width: 768px) {
  .tarjeta {
    flex: 1 1 100%;
  }
}
</style>


