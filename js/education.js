document.addEventListener("DOMContentLoaded", () => {
  const gradesByYear = {
    1: [
      { module: "Software Development 2", grade: "A" },
      { module: "Systems Analysis", grade: "A" },
      { module: "Statistics", grade: "A" },
      { module: "Spanish 2", grade: "A" },
      { module: "Database Fundamentals", grade: "A" },
      { module: "Operating Systems Fundamentals", grade: "A" },
      { module: "Spanish 1", grade: "A" },
      { module: "Software Development 1", grade: "A" },
      { module: "Computer Architecture", grade: "A" },
      { module: "Visual Design & User Experience", grade: "A" },
      { module: "Discrete Mathematics 1", grade: "A" },
      { module: "Critical Skills Development", grade: "A" },
    ],
    2: [
      { module: "Spanish 4", grade: "A" },
      { module: "Social Media Communications", grade: "A" },
      { module: "Software Development 4", grade: "A" },
      { module: "Project", grade: "A" },
      { module: "Management Science", grade: "A" },
      { module: "Database Administration & Analysis", grade: "A" },
      { module: "Software Development 3", grade: "A" },
      { module: "Software Quality Assurance & Testing", grade: "A" },
      { module: "Advanced Database Technologies", grade: "A" },
      { module: "Discrete Mathematics 2", grade: "A" },
      { module: "Client-Side Web Development", grade: "A" },
      { module: "Spanish 3", grade: "A" },
    ],
    3: [
      { module: "Experiential Learning", grade: "A" },
      { module: "Server-side Web Development", grade: "A" },
      { module: "Operating Systems", grade: "B" },
      { module: "Cloud Services & Distributed Computing", grade: "C+" },
      { module: "Big Data Technologies", grade: "B+" },
      { module: "Data Structures & Algorithms", grade: "A" },
      { module: "Data Analysis", grade: "A" },
    ],
    4: [
      { module: "DevOps", grade: "In Progress" },
      { module: "Enterprise Performance Architecture", grade: "In Progress" },
      { module: "Software Architecture", grade: "In Progress" },
      { module: "Data Visualization", grade: "In Progress" },
      { module: "Final Year Project", grade: "In Progress" },
    ],
  };

  const tableBody = document.getElementById("gradesTable");
  const dropdownButton = document.getElementById("yearDropdown");

  function renderGrades(year) {
    tableBody.innerHTML = "";
    gradesByYear[year].forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.module}</td>
        <td class="text-end fw-semibold">${item.grade}</td>
      `;
      tableBody.appendChild(row);
    });
    dropdownButton.textContent = `Year ${year}`;
  }

  renderGrades(4);

  document.querySelectorAll(".dropdown-item").forEach((item) => {
    item.addEventListener("click", () => {
      renderGrades(item.dataset.year);
    });
  });
});
