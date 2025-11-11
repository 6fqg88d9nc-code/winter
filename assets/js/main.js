document.getElementById("ticketForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const ticketType = document.getElementById("ticketType").value;

  const messageBox = document.getElementById("messageBox");
  const messageText = document.getElementById("messageText");

  if (name === "" || email === "" || ticketType === "") {
    messageText.textContent = "Барлық өрістерді толтырыңыз!";
  } else {
    messageText.textContent = `Рахмет, ${name}! Сіз ${ticketType.toUpperCase()} билетін сәтті сатып алдыңыз! 💜`;
  }

  messageBox.style.display = "block";
});

function closeMessage() {
  document.getElementById("messageBox").style.display = "none";
}
