document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad para el menú móvil
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });
  }

  // Funcionalidad para los elementos de FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Cerrar todos los otros elementos
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Alternar el estado del elemento actual
      item.classList.toggle("active");
    });
  });
  /*
  // Funcionalidad para el sistema de calificación
  const ratingLabels = document.querySelectorAll(".rating-select label");

  ratingLabels.forEach((label) => {
    label.addEventListener("mouseover", function () {
      // Reset all stars
      ratingLabels.forEach((l) => (l.style.color = "#ddd"));

      // Highlight hovered star and all stars before it
      let currentLabel = this;
      while (currentLabel) {
        currentLabel.style.color = "#ffdb70";
        currentLabel = currentLabel.previousElementSibling;

        // Skip input elements
        if (currentLabel && currentLabel.tagName === "INPUT") {
          currentLabel = currentLabel.previousElementSibling;
        }
      }
    });
  });
*/
  // Seleccionar los labels en el orden correcto
  const ratingLabels = document.querySelectorAll(".rating-select label");
  let selectedRating = 0; // Almacena la calificación seleccionada

  ratingLabels.forEach((label) => {
    label.addEventListener("mouseover", function () {
      highlightStars(this.getAttribute("for"));
    });

    label.addEventListener("mouseleave", function () {
      resetStars();
    });

    label.addEventListener("click", function () {
      selectedRating = this.getAttribute("for"); // Guardamos la selección
      highlightStars(selectedRating, true); // Resaltamos de forma permanente
    });
  });

  // Función para resaltar estrellas correctamente (izquierda a derecha)
  function highlightStars(selectedId, isPermanent = false) {
    const selectedInput = document.getElementById(selectedId);
    const ratingValue = parseInt(selectedInput.value);

    ratingLabels.forEach((label) => {
      const relatedInput = document.getElementById(label.getAttribute("for"));
      if (parseInt(relatedInput.value) <= ratingValue) {
        // Condición corregida
        label.style.color = "#ffdb70"; // Amarillo
      } else {
        label.style.color = "#ddd"; // Gris
      }
    });

    if (isPermanent) {
      selectedRating = ratingValue;
    }
  }

  // Función para restaurar las estrellas si no hay selección
  function resetStars() {
    if (selectedRating) {
      highlightStars(`star${selectedRating}`, true); // Mantener la selección
    } else {
      ratingLabels.forEach((l) => (l.style.color = "#ddd"));
    }
  }
});

function graciasR() {
  alert("Gracias por su reseña!");
}

function graciasP() {
  alert("Gracias por su pregunta!");
}
