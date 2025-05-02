function footer(container) {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  footer.innerHTML = `
    <div class="container footer__container">
      <img src="../../img/logo-personal.jpg" alt="Logo" class="footer-logo">
      <nav class="footer__links">
        <a href="index.html"><img src="../../img/home.png" alt="Inicio">Inicio</a>
        <a href="servicios.html"><img src="../../img/user.png" alt="Servicios">Servicios</a>
        <a href="contacto.html"><img src="../../img/phone.png" alt="Contacto">Contacto</a>
      </nav>
      <nav class="footer__socials">
        <a href="#" target="_blank"><img src="../../img/Frame 24.png"
            alt="Linkeding link"></a>
        <a href="#" target="_blank"><img src="../../img/Frame 26.png"
            alt="Twitter link"></a>
        <a href="#" target="_blank"><img src="../../img/Frame 27.png"
            alt="Github link"></a>
      </nav>
      <h3>© 2025 - https://apx.school</h3>
    </div>
    `;

  container.appendChild(footer);
}
