class Person {
  constructor(name = 'Unknown', age = undefined) { //constructor runs during instantiation
    this.name = name;
    this.age = age;
  }
  greeting() {
    return `Hello, I am ${this.name}`;
  }
  description() {
    return `I am ${this.age} years old.`;
  }
}

class Student extends Person { //extends specifies Student as the child of Person
  constructor(name, age, major = undefined) {
    super(name, age); // passed to the Person constructor
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  description() {
    const personDesc = super.description();
    if (this.hasMajor()) {
      return `${personDesc} I am studying ${this.major}`;
    }
    return personDesc;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = 'Earth') {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  greeting() {
    return `${super.greeting()} I am from ${this.location}`;
  }
}