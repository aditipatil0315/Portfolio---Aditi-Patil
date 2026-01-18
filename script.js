document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    const link = card.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank"); // opens in new tab
    }
  });
});
