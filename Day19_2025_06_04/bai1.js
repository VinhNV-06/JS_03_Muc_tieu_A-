// baì 1 : hiển thị thông tin sinh viên
class Student {
  constructor(id, name, email, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }

  displayInfo() {
    console.log("ID : " + this.id);
    console.log("Name : " + this.name);
    console.log("Email : " + this.email);
    console.log("Age : " + this.age);
  }
}

const student1 = new Student("UDU001", "Nguyen Van A", "abc@gmail.com", 18);
const student2 = new Student("UDU002", "Nguyen Van B", "abc@gmail.com", 18);

student1.displayInfo();
student2.displayInfo();
