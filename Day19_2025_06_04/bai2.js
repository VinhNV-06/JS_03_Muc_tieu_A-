// Tinhs lương cho nhân viên 
class Employee {
    constructor(name,position,baseSalary,workingDay) {
        this.name=name;
        this.position=position;
        this.baseSalary=baseSalary;
        this.workingDay=workingDay;
    }

    caculateSalary() {
        return this.baseSalary * this.workingDay ;
    }

    show() {
        console.log("Name : "+this.name);
        console.log("Position : "+this.position);
        console.log("Base Salary : "+this.baseSalary);
        console.log("Working Day : "+this.workingDay);
        console.log("Salary : "+this.caculateSalary());
    }
}

const employee_1 = new Employee("Nguyen Van A","nhan vien",2000,10);
employee_1.show();

// xong baì 2 