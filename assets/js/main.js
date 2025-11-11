// Жай анимация және хабарлама шығару
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  alert("Билетті сәтті сатып алдыңыз! Концертте кездескенше!");
});

// Hover кезінде карточка жарықтайды (CSS-пен бірге жұмыс істейді)
const members = document.querySelectorAll(".member");
members.forEach(member => {
  member.addEventListener("mouseenter", () => {
    member.style.boxShadow = "0 0 20px #ba68c8";
  });
  member.addEventListener("mouseleave", () => {
    member.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  });
});
