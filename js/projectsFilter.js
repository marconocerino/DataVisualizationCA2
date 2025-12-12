document.addEventListener("DOMContentLoaded", () => {
  const filterNavBar = document.getElementById("projectFilters");
  const languages = filterNavBar?.querySelectorAll("[data-filter]") || [];
  const projects = document.querySelectorAll(".project-item");

  if (!filterNavBar || projects.length === 0) return;

  function setActiveLanguage(activeLanguage) {
    languages.forEach((language) => {
      language.classList.remove("btn-warning", "fw-semibold");
      language.classList.add("btn-dark", "text-white-50");
    });

    activeLanguage.classList.remove("btn-dark", "text-white-50");
    activeLanguage.classList.add("btn-warning", "fw-semibold");
  }

  function applyFilter(filter) {
    projects.forEach((item) => {
      const tags = (item.getAttribute("data-tags") || "").toLowerCase();
      const matches =
        filter === "all" || tags.split(/\s+/).includes(filter.toLowerCase());

      item.classList.toggle("d-none", !matches);
    });
  }

  filterNavBar.addEventListener("click", (e) => {
    const language = e.target.closest("[data-filter]");
    if (!language) return;

    const filter = language.getAttribute("data-filter");
    setActiveLanguage(language);
    applyFilter(filter);
  });

  applyFilter("all");
});
