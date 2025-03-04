document.addEventListener("DOMContentLoaded", function () {

  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menuBtn.classList.toggle("active");
    });
  }


  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
  
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      
      item.classList.toggle("active");
    });
  });
  

  const ratingLabels = document.querySelectorAll(".rating-select label");
  let selectedRating = 0; a

  ratingLabels.forEach((label) => {
    label.addEventListener("mouseover", function () {
      highlightStars(this.getAttribute("for"));
    });

    label.addEventListener("mouseleave", function () {
      resetStars();
    });

    label.addEventListener("click", function () {
      selectedRating = this.getAttribute("for"); 
      highlightStars(selectedRating, true); 
    });
  });


  function highlightStars(selectedId, isPermanent = false) {
    const selectedInput = document.getElementById(selectedId);
    const ratingValue = parseInt(selectedInput.value);

    ratingLabels.forEach((label) => {
      const relatedInput = document.getElementById(label.getAttribute("for"));
      if (parseInt(relatedInput.value) <= ratingValue) {
      
        label.style.color = "#ffdb70";
      } else {
        label.style.color = "#ddd"; 
      }
    });

    if (isPermanent) {
      selectedRating = ratingValue;
    }
  }


  function resetStars() {
    if (selectedRating) {
      highlightStars(`star${selectedRating}`, true); 
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

