// Hover кезінде карточка жарықтайды
const members = document.querySelectorAll(".member");
members.forEach(member => {
  member.addEventListener("mouseenter", () => {
    member.style.boxShadow = "0 0 20px #ba68c8";
  });
  member.addEventListener("mouseleave", () => {
    member.style.boxShadow = "0 2px 8px rgba(0,0,0,0.2)";
  });
});
