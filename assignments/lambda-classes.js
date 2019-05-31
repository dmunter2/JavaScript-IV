// CODE here for your Lambda Classes


class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    };
}

class Instructor extends Person {
    constructor(attr, grade) {
        super(attr, grade);
        this.specialty = attr.specialty;
        this.favLanguage = attr.favLanguage;
        this.catchPhrase = attr.catchPhrase;
    }
    demo(subject) {
        return `today we are learning about ${subject}`;
    };
    grade(subject) {
        return `${this.name} receives a perfect score on ${subject}`
    };
}


class Student extends Instructor {
    constructor(attr, subject) {
        super(attr, subject);
        this.previousBackground = attr.previousBackground;
        this.className = attr.className;
        this.favSubjects = attr.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    };
    PRAssignment() {
        return `${this.name} has submitted a PR for ${subject}`
    };
    sprintChallenge() {
        return `${this.name} has begun spring challenge on ${subject}`
    };
}


class ProjectManager extends Instructor {
    constructor(attr, channel) {
        super(attr);
        this.gradClassName = attr.gradClassName;
        this.favInstructors = attr.favInstructors;
    }
    standup(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`
    };
    debugsCode(subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`
    }
}



const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});


const Billy = new Student({
    name: 'Billy',
    previousBackground: 'Iowa',
    className: 37,
    favSubjects: 'JavaScript, C, Python',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const Chad = new ProjectManager({
    name: 'Chad',
    gradClassName: 'Nebraska',
    favInstructors: 'Dan',
    favSubjects: 'JavaScript, C, HTML',
    specialty: 'Back-end',
    catchPhrase: `Lambda rules`
});

console.log(Fred.grade('Javascript'));
console.log(Billy.listsSubjects());
console.log(Chad.standup('webpt_9'));