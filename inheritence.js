class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} I'm ${this.age} years old.`);
    }
}

class Developer extends Person {
    constructor(name, language) {
        super(name)
        this.language = language
    }

    introduce() {
        console.log(`Hi, I'm ${this.name} a ${this.language} developer.`);
    }
}

const developer = new Developer('Shohan', 'JavaScript')

developer.introduce();