class Admin {
    constructor(name) {
        this.name = name;
        this.salary = 0; 
    }

    giveSalary(amount) {
        this.salary += amount;
        console.log("Salary:", this.salary);
    }

    acceptManagerLeave() {
        this.leaveStatus = 'accepted';
        console.log("Manager leave request has been accepted.");
    }

    rejectManagerLeave() {
        this.leaveStatus = 'rejected';
        console.log("Manager leave request has been rejected.");
    }
}

class Manager extends Admin {
    constructor(name, department) {
        super(name); 
        this.salary = 0; 
        this.department = department; 
    }

    acceptEmployeeLeave() {
        this.leaveStatus = 'accepted';
        console.log("Employee leave request has been accepted.");
    }

    rejectEmployeeLeave() {
        this.leaveStatus = 'rejected';
        console.log("Employee leave request has been rejected.");
    }

    getManagerSalary(amount) {
        this.salary += amount;
        console.log("Manager Salary:", this.salary);
    }
}

class Employee extends Admin {
    constructor(name) {
        super(name); 
        this.salary = 0; 
    }

    requestLeave() {
        console.log(`${this.name} has requested leave.`);
    }

    getSalary(amount) {
        this.salary += amount;
        console.log("Employee Salary:", this.salary);
    }
}

let a = new Admin('admin');
a.giveSalary(20000);
a.rejectManagerLeave();

let m = new Manager('manager', 'Sales');
m.acceptEmployeeLeave();
m.getManagerSalary(14000); 

let e = new Employee('employee');
e.getSalary(6000);
e.requestLeave();
