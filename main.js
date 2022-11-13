const btn = document.querySelectorAll(".list_btn");

btn.forEach((e) => {
  e.addEventListener("click", () => {
    if (e.classList.contains("active")) {
      e.classList.toggle("active");
    } else {
      btn.forEach((e) => e.classList.remove("active"));
      e.classList.add("active");
    }
  });
});
