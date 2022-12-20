class Student{
    static count = 0;
    constructor(name, age, phone, marks) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.marks = marks;
        Student.count++;
    }
    checkEligibility() {
        this.marks >= 40 ? console.log("eligible") : console.log("not eligible");
    }
}

let st1 = new Student("qwe", 15, 123, 90);
let st2 = new Student("asd", 16, 456, 39);
let st3 = new Student("pqr", 16, 789, 50);
let st4 = new Student("zxc", 17, 901, 70);
let st5 = new Student("mnm", 13, 911, 99);

st1.checkEligibility();
st2.checkEligibility();
console.log(Student.count)

let square = (x) => {return x * x};
console.log(square(2));

let func = function() {
    this.val = 1;
    setTimeout(() => {
        this.val++;
        console.log(this.val);
    },1)
}
let funcInc = new func();

let x = function () {
    console.log(arguments[0]);
}

x(1,2,3);

let y = (...n) => {
    console.log(n[0]);
}

y(1,2,3);

class Student{
        static count = 0;
        constructor(name, age, phone, marks) {
            this.name = name;
            this.age = age;
            this.phone = phone;
            this.marks = marks;
            Student.count++;
        }
        EligibilityForPlacements() {
            return (age) => {
                age < 20 || this.marks < 40? console.log("not eligible") : console.log("eligible");
            }
        }
    }

let st1 = new Student("qwe", 15, 123, 90);

st1.EligibilityForPlacements()(15);
