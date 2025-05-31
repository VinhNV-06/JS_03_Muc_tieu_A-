// Quản lý danh sách sản phẩm 
class Product {
    constructor(id,name,price,quantity) {
        this.id=id;
        this.name=name;
        this.price=price;
        this.quantity=quantity;
    }
}

let products = [
  new Product(1, "Laptop", 2000, 5),
  new Product(2, "Car", 5000, 10),
  new Product(3, "Table", 1000, 7),
];


function addProducts(id,name,price,quantity){
    const newProduct = new Product(id,name,price,quantity);
    products.push(newProduct);

}

function ton_kho () {
    let total = 0 ;
    for(let product of products) {
        total += product.price * product.quantity;
    }
    return total;
}

function San_pham_dat_nhat() {
    // neu khong co san pham nao
    if(products.length === 0 ) return null ; 

    let maxProduct = products[0] ;
    for(let i = 1 ; i < products.length ; i++) {
        if(products[i].price > maxProduct.price){
            maxProduct = products[i];
        }
    }
    return maxProduct ; 
}

// thêm sản phẩm mới
addProducts(4, "motor" , 2500 , 2);  
// in tổng giá trị hàng tồn kho
console.log("Tổng giá trị hàng tồn kho : "+ ton_kho());
// kiếm sản phẩm đắt nhất
const san_pham = San_pham_dat_nhat();
if (san_pham) {
    console.log("Sản phẩm đắt nhất : ", san_pham.name, "-Giá" , san_pham.price);
}
else {
    console.log("Danh sách sản phẩm đang rỗng");
}


// Xong bài 3 