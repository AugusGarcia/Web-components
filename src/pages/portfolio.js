function main() {
  navComponent(document.querySelector(".navbar"));

  const servicesContainer = document.querySelector(".cards");

  getWorks().then((works) => {
    works.forEach((work) => {
      const card = cardComponent({
        titulo: work.title,
        texto: work.texto,
        img: work.img,
      });
      servicesContainer.appendChild(card);
    });
  });

  footer(document.querySelector(".footer"));
}

main();
