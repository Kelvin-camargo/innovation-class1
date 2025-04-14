const departmentsList = document.querySelector(".departmentsList");
const menuContent = document.querySelector(".menuContentDepartment");

for (let i = 0; i < 8; i++) {
  const li = document.createElement("li");
  li.textContent = "Departamento";
  departmentsList.appendChild(li);

  if (i === 0) {
    li.addEventListener("mouseenter", () => {
      menuContent.classList.add("show");
    });

    li.addEventListener("mouseleave", () => { 
      menuContent.classList.remove("show");
    });

  }
}