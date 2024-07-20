// Function constructor approach
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

Person.prototype.salute = function() {
    console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
};

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function Professor(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

// Test Exercise 4 with function constructor approach
let student = new Student("Alice", 20, "Computer Science");
student.greet();
student.salute();

let professor = new Professor("Dr. Smith", 45, "Physics");
professor.greet();
professor.salute();

// Object prototype approach
const personPrototype = {
    greet() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute() {
        console.log("Good morning!, and in case I don't see you, good afternoon, good evening and good night!");
    }
};

const studentPrototype = Object.create(personPrototype);
studentPrototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function createStudent(name, age, major) {
    let student = Object.create(studentPrototype);
    student.name = name;
    student.age = age;
    student.major = major;
    return student;
}

const professorPrototype = Object.create(personPrototype);
professorPrototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

function createProfessor(name, age, department) {
    let professor = Object.create(professorPrototype);
    professor.name = name;
    professor.age = age;
    professor.department = department;
    return professor;
}

// Test Exercise 4 with object prototype approach
let student2 = createStudent("Bob", 22, "Mathematics");
student2.greet();
student2.salute();

let professor2 = createProfessor("Dr. Johnson", 50, "Chemistry");
professor2.greet();
professor2.salute();
