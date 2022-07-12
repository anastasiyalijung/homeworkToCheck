class Student {
    expelledStudent = false;
    marks = [];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }


    getInfo() {
        console.log(`Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`);
    }


    get getMarks() {
        if (this.expelledStudent) {
            return null;
        }
        return this.marks;
    }

    set addMarks(mark) {
        if (this.expelledStudent) return;
        this.marks.push(mark);
    }

    getAverageMark() {
        let averageMark = 0;
        averageMark = this.marks.reduce((prev, curr) => prev + curr, 0) / this.marks.length;
        return averageMark.toFixed(1);
    }

    dismiss() {
        this.expelledStudent = true;
        console.log('Student expelled');
    }

    recover() {
        this.expelledStudent = false;
        console.log('Student recovered');
    }
}

//advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => {
            this.getScholarship();
        }, 30000);
    }
    getScholarship() {
        console.log('Середній бал', this.getAverageMark());
        if (this.getAverageMark() >= 4) {
            console.log(`${this.fullName}, Ви отримали 1400 грн. стипендії`);
        } else {
            console.log(`не отримує стипендію`);
        }
        if (this.expelledStudent) {
            console.log(`${this.fullName} виключено`);
        }
    }
}

const studentBudget = new BudgetStudent(
    'Вищої Школи Психотерапії м.Одеса',
    5,
    'Остап Бeндер'
);
[5, 5, 5, 2, 5, 2].forEach(value => {
    studentBudget.addMarks = value;
})
studentBudget.getInfo();
console.log(studentBudget.getMarks);
studentBudget.getScholarship();

const studentOB = new Student(
    'Студент 1го курсу Вищої Школи Психотерапії м.Одеса',
    1,
    'Остап Бeндер'
);
console.log(studentOB);
studentOB.getInfo();
console.log(studentOB.getMarks);
console.log((studentOB.addMarks = 5));
console.log(studentOB.getMarks);
console.log('Середня оцінка', studentOB.getAverageMark());
studentOB.dismiss();
console.log(studentOB);
console.log(studentOB.getMarks);
console.log((studentOB.addMarks = 5));
console.log(studentOB.getMarks);
studentOB.recover();
console.log(studentOB);
console.log(studentOB.getMarks);
console.log((studentOB.addMarks = 5));
console.log(studentOB.getMarks);