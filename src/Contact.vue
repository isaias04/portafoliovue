<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref('')
const error = ref('')


// Reemplazar valores con tus credenciales de EmailJS
const SERVICE_ID = 'default_service'
const TEMPLATE_ID = 'template_0i76w9i'
const PUBLIC_KEY = 'e3R04PFufH6qy0wIZ'

function enviarMensaje() {
  error.value = ''
  success.value = ''

  if (!name.value || !email.value || !message.value) {
    error.value = 'Por favor, completa todos los campos.'
    return
  }

  const templateParams = {
    from_name: name.value,
    from_email: email.value,
    message: message.value,
  }

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
    .then(() => {
      success.value = 'Mensaje enviado correctamente.'
      name.value = ''
      email.value = ''
      message.value = ''
    })
    .catch((err) => {
      error.value = 'Error al enviar el mensaje.'
      console.error(err)
    })
    
}
</script>

<template>
     <h2>Contacto</h2>
  <div class="contact-container">
    <form @submit.prevent="enviarMensaje">
      <input type="text" v-model="name" placeholder="Tu nombre" />
      <input type="email" v-model="email" placeholder="Tu correo" />
      <textarea v-model="message" placeholder="Tu mensaje..."></textarea>

      <div class="botones-contacto">
        <button type="submit">Enviar</button>
      </div>

      <p v-if="success" class="success">{{ success }}</p>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #1a1a1a;
  border-radius: 10px;
  color: rgb(234, 148, 10);
}
h2 {
  text-align: center;
  color: #f9a826;
  margin-bottom: 1.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  background-color: #2a2a2a;
  border: 1px solid #444;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
}

button {
  padding: 0.7rem 1.5rem;
  border: 1px solid #f9a826;
  background: transparent;
  color: #f9a826;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.btn-descargar {
  background-color: #f9a826;
  color: #000;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  transition: background 0.3s ease;
  margin-top: 1rem;
}

.btn-descargar:hover {
  background-color: #ffbe40;
  color: #000;
}


button:hover {
  background-color: #f9a826;
  color: #1a1a1a;
}

.success {
  color: #7CFC00;
  margin-top: 1rem;
}

.error {
  color: #FF6347;
  margin-top: 1rem;
}
.botones-contacto {
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.botones-contacto button {
  margin-top: 0;
}


</style>

