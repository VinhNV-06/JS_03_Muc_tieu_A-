let editingRow = null;

document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const maSV = document.getElementById("maSv").value;
  const hoTen = document.getElementById("hoTen").value;
  const email = document.getElementById("email").value;
  const sdt = document.getElementById("sdt").value;

  if (editingRow) {
    // cập nhật dòng đang chỉnh sửa
    editingRow.cells[0].innerText = maSV;
    editingRow.cells[1].innerText = hoTen;
    editingRow.cells[2].innerText = email;
    editingRow.cells[3].innerText = sdt;

    editingRow = null;
    document.getElementById("submitBtn").innerText = "thêm";
  } else {
    // thêm dòng mới
    const newRow = document.createElement("tr");
    [maSV, hoTen, email, sdt].forEach(function (value) {
      const cell = document.createElement("td");
      cell.textContent = value;
      newRow.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.innerText = "Sửa" ;
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click" , function() {
      document.getElementById("maSv").value = newRow.cells[0].innerText;
      document.getElementById("hoTen").value = newRow.cells[1].innerText;
      document.getElementById("email").value = newRow.cells[2].innerText;
      document.getElementById("sdt").value = newRow.cells[3].innerText;
      editingRow = newRow;
      document.getElementById("submitBtn").innerText = "Lưu";
    });

    actionCell.appendChild(editBtn);
    newRow.appendChild(actionCell);
    document.getElementById("studentTableBody").appendChild(newRow);

  }
  document.getElementById("studentForm").reset();
});


// Hoàn thành day 14