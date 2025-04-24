const input  = document.getElementById('searchBox');
const button = document.getElementById('searchBtn');
const span   = document.getElementById('searchResult');

function updateResult() {
  const query = input.value.trim();

  if (query) {
    span.textContent = `Você buscou por: '${query}'`;
    span.hidden = false;          
  } else {
    span.hidden = true;        
  }
}


button.addEventListener('click', updateResult);


input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') updateResult();
});
input.addEventListener('input', updateResult); 
