// Quản lý danh sách sản phẩm
class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
}

let products = [
  new Product(1, "Laptop", 2000, 5),
  new Product(2, "Car", 5000, 10),
  new Product(3, "Table", 1000, 7),
];

function addProducts(id, name, price, quantity) {
  const newProduct = new Product(id, name, price, quantity);
  products.push(newProduct);
}

function ton_kho() {
  let total = 0;
  for (let product of products) {
    total += product.price * product.quantity;
  }
  return total;
}

function San_pham_dat_nhat() {
  // neu khong co san pham nao
  if (products.length === 0) return null;

  let maxProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > maxProduct.price) {
      maxProduct = products[i];
    }
  }
  return maxProduct;
}

// thêm sản phẩm mới
addProducts(4, "motor", 2500, 2);
// in tổng giá trị hàng tồn kho
console.log("Tổng giá trị hàng tồn kho : " + ton_kho());
// kiếm sản phẩm đắt nhất
const san_pham = San_pham_dat_nhat();
if (san_pham) {
  console.log("Sản phẩm đắt nhất : ", san_pham.name, "-Giá", san_pham.price);
} else {
  console.log("Danh sách sản phẩm đang rỗng");
}

let editingId = null;

function renderProducts() {
  const tbody = document.querySelector("#productTable tbody");
  tbody.innerHTML = "";
  products.forEach((product) => {
    tbody.innerHTML += `
      <tr>
        <td>${product.id}</td>
        <td>${product.name}</td>
        <td>${formatCurrency(product.price)}</td>
        <td>${product.quantity}</td>
        <td>${formatCurrency(product.price * product.quantity)}</td>
        <td>
          <button class="edit-btn" onclick="editProduct(${
            product.id
          })">Sửa</button>
          <button class="delete-btn" onclick="deleteProduct(${
            product.id
          })">Xóa</button>
        </td>
      </tr>
    `;
  });

  document.getElementById("totalValue").innerText =
    "Tổng giá trị tồn kho: " + formatCurrency(ton_kho());

  const expensive = San_pham_dat_nhat();
  document.getElementById("mostExpensive").innerText = expensive
    ? `Sản phẩm đắt nhất: ${expensive.name} (${formatCurrency(
        expensive.price
      )})`
    : "Không có sản phẩm nào";
}

function formatCurrency(number) {
  return number.toLocaleString("vi-VN") + " VND";
}

function addProduct() {
  const id = +document.getElementById("productId").value;
  const name = document.getElementById("productName").value;
  const price = +document.getElementById("productPrice").value;
  const quantity = +document.getElementById("productQuantity").value;

  if (!id || !name || !price || !quantity) {
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }

  if (editingId !== null && editingId === id) {
    // Cập nhật
    const product = products.find((p) => p.id === id);
    product.name = name;
    product.price = price;
    product.quantity = quantity;
    editingId = null;
  } else {
    if (products.some((p) => p.id === id)) {
      alert("ID đã tồn tại, vui lòng chọn ID khác.");
      return;
    }
    addProducts(id, name, price, quantity);
  }

  renderProducts();
  resetForm();
}

function resetForm() {
  document.getElementById("productId").value = "";
  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
  document.getElementById("productQuantity").value = "";
}

function deleteProduct(id) {
  products = products.filter((p) => p.id !== id);
  renderProducts();
}

function editProduct(id) {
  const product = products.find((p) => p.id === id);
  if (product) {
    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("productPrice").value = product.price;
    document.getElementById("productQuantity").value = product.quantity;
    editingId = id;
  }
}

// Khởi tạo ban đầu
renderProducts();