const departmentsToggle = document.querySelector(".departmentsToggle");



for (let i = 0; i < 15; i++) {
    const li = document.createElement("li");
    li.classList.add("departmentItem");
    li.textContent = `Departamento`; 
    departmentsToggle.appendChild(li);
}