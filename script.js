function createTable() {
  const cols = parseInt(document.getElementById("columns").value);
  const rows = parseInt(document.getElementById("rows").value);
  const table = document.getElementById("myTable");

  table.innerHTML = '';

  const headerRow = table.insertRow();
  for (let c = 0; c < cols; c++) {
    const th = document.createElement("th");
    th.textContent = `Column ${c + 1}`; 
    th.style.backgroundColor = "#1e3a8a"; 
    th.style.color = "white";            
    th.style.padding = "8px";
    headerRow.appendChild(th);
  }

  for (let r = 0; r < rows; r++) {
    const row = table.insertRow();
    for (let c = 0; c < cols; c++) {
      const cell = row.insertCell();
      cell.textContent = ""; 
    }
  }
}
