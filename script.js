document.addEventListener("DOMContentLoaded", () => {
  const botaoTema = document.getElementById("theme-toggle");
  const body = document.body;

  botaoTema.addEventListener("click", () => {
    if (body.classList.contains("light-theme")) {
      body.classList.remove("light-theme");
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
      body.classList.add("light-theme");
    }
  });
});
