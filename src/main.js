// 🔹 Estilos globales
import './assets/main.css'
import 'aos/dist/aos.css'

// 🔹 Vue
import { createApp } from 'vue'
import App from './App.vue'

// 🔹 Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Íconos de marcas
import { 
  faLaravel, 
  faVuejs, 
  faGithub, 
  faLinkedin, 
  faInstagram, 
  faFacebook, 
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons'

// Íconos sólidos
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

// Agregar íconos a la librería
library.add(
  faLaravel,
  faVuejs,
  faGithub,
  faLinkedin,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faEnvelope,
  faMobileAlt
)

// 🔹 Inicializar app
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')

// 🔹 Inicializar AOS
import AOS from 'aos'
AOS.init({
  duration: 800,
  once: true,
})











