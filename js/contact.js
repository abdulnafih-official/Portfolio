(function () {
  emailjs.init("gMf40xF0SYQhX9_sx");
})();

document.getElementById("contact").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_gcopzyk",
    "template_g0ubjg2",
    this
  ).then(
    function () {
      alert("Message sent successfully!");
      document.getElementById("contact").reset();
    },
    function (error) {
      alert("Failed to send message");
      console.error(error);
    }
  );
});
