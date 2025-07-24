class Person{
    constructor(name, age, gender, DOB) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.DOB = DOB; // Date of Birth
    }
    getDetails() {
        if (this.gender === "Male") {
            return `This is ${this.name}. He is ${this.age} years old.`;
        }
        else {
            return `This is ${this.name}. She is ${this.age} years old.`;
        }
    }
    updateAge() {
        this.age += 1;
    }
    isAdult() {
        return this.age >= 18;
    }
}
class Student extends Person{
    constructor(name, age, gender, grade, DOB) {
        super(name, age, gender, DOB);
        this.grade = grade;
    }
    getDetails() {
        return `${this.name} is ${this.age} years old and is in grade ${this.grade}.`;
    }
    updateAge() {
        super.updateAge();
        return `${this.name} is now ${this.age} years old,`;
    }
    updateGrade(newGrade) {
        this.grade = newGrade;
        return `${this.name} has been promoted. Now in grade ${this.grade}.`;
    }
    getDOB() {
        return this.DOB;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
    }
    getDetails() {
    return `${this.name} is ${this.age} years old and teaches ${this.subject}.`;
    }
    updateAge() {
    super.updateAge();
    return `${this.name} is now ${this.age} years old,`;
    }
}

// Usage examples

const person1 = new Person("Alice", 25, "Female", "1999-03-15");
console.log(person1.getDetails()); // This is Alice. She is 25 years old.
person1.updateAge();
console.log(`After birthday: ${person1.getDetails()}`); // This is Alice. She is 26 years old.
console.log(`Is adult: ${person1.isAdult()}`);    // true

const student1 = new Student("Bob", 16, "Male", 10, "2008-05-22");
console.log(student1.getDetails()); // Bob is 16 years old and is in grade 10.
student1.updateAge();
console.log(`After birthday: ${student1.getDetails()}`); // Bob is 17 years old and is in grade 10.
console.log(student1.updateGrade(11)); // Bob has been promoted. Now in grade 11.
console.log(`DOB: ${student1.getDOB()}`); // DOB: 2008-05-22

const teacher1 = new Teacher("Mrs. Smith", 40, "Female", "Mathematics", "1984-09-10");
console.log(teacher1.getDetails()); // Mrs. Smith is 40 years old and teaches Mathematics.
teacher1.updateAge();
console.log(`After birthday: ${teacher1.getDetails()}`); // Mrs. Smith is 41 years old and teaches Mathematics.