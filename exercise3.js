// Teacher object derived from a Person function constructor
function Person(name) {
    this.name = name;
}

Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

let teacher1 = new Person("Deo");
teacher1.teach("JavaScript");

// Using Object.create
const teacherPrototype = {
    teach(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

function createTeacher(name) {
    let teacher = Object.create(teacherPrototype);
    teacher.name = name;
    return teacher;
}

let teacher2 = createTeacher("Deo");
teacher2.teach("Python");
