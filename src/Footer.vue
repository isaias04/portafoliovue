<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <nav class="footer-center" aria-label="Redes sociales">
        <a href="https://www.instagram.com/isaiassegovia2019?igsh=eXFxN3BveW9vM2Nk" target="_blank" aria-label="Instagram" rel="noopener">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.facebook.com/share/16pDqjpAtA/" target="_blank" aria-label="Facebook" rel="noopener">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://www.linkedin.com/in/isaias-segovia-8b5735325/" target="_blank" aria-label="LinkedIn" rel="noopener">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://wa.me/50379705056" target="_blank" aria-label="WhatsApp" rel="noopener">
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </nav>

      <div class="footer-right">
        <p>&copy; {{ year }} @derechos reservados isaias-segovia.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(20, 20, 20, 0.8);
  color: #eee;
  padding: 1.2rem 1.5rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}

.footer-center {
  display: flex;
  gap: 1.2rem;
  justify-content: flex-start; /* íconos siempre a la izquierda */
  flex-shrink: 0; /* evitar que se reduzcan */
}

.footer-center a {
  font-size: 1.4rem;
  color: #eee;
  border-radius: 50%;
  padding: 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.footer-center a:hover,
.footer-center a:focus {
  color: #f9a826;
  transform: scale(1.1);
  box-shadow: 0 0 8px 2px rgba(249, 168, 38, 0.6);
  outline: none;
}

.footer-right p {
  font-size: 0.85rem;
  color: #bbb;
  user-select: none;
  white-space: nowrap;
  text-align: right;
}

/* Responsive */
@media (max-width: 600px) {
  .container {
    flex-wrap: wrap;
  }
  .footer-center {
    width: 100%;
    justify-content: flex-start; /* íconos siempre a la izquierda */
    margin-bottom: 0.75rem;
  }
  .footer-right {
    width: 100%;
    text-align: center; /* texto centrado en móvil */
  }
  .footer-right p {
    white-space: normal;
  }
}
</style>


