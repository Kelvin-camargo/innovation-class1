const categoryToggle1 = document.querySelectorAll(".categoryToggle1");
const categoryToggle2 = document.querySelectorAll(".categoryToggle2");
const categoryToggle3 = document.querySelectorAll(".categoryToggle3");

for (let i = 1; i <= 8; i++) {
    const li = document.createElement("li");
    li.textContent = `Categoria`;
    
    categoryToggle1.forEach(el => el.appendChild(li.cloneNode(true)));
    categoryToggle2.forEach(el => el.appendChild(li.cloneNode(true)));
    categoryToggle3.forEach(el => el.appendChild(li.cloneNode(true)));
}