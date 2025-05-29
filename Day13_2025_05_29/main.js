document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const maSV = document.getElementById("maSv").value;
  const hoTen = document.getElementById("hoTen").value;
  const email = document.getElementById("email").value;
  const sdt = document.getElementById("sdt").value;

  const newRow = document.createElement("tr");
  [maSV, hoTen, email, sdt].forEach(function (value) {
    const cell = document.createElement("td");
    cell.textContent = value;
    newRow.appendChild(cell);
  });

  document.getElementById("studentTableBody").appendChild(newRow);

  document.getElementById("studentForm").reset();
});
