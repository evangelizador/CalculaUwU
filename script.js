document.addEventListener("DOMContentLoaded", function () {
  const pantalla = document.getElementById("pantalla");
  const botones = document.querySelectorAll(".botonera button");

  botones.forEach((boton) => {
    boton.addEventListener("click", function () {
      const valor = this.getAttribute("data-valor");
      if (valor === "borrar") {
        pantalla.value = "";
      } else if (valor === "=") {
        try {
          pantalla.value = eval(pantalla.value);
        } catch {
          pantalla.value = "Error";
        }
      } else {
        pantalla.value += valor;
      }
    });
  });
});