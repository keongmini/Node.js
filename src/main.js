/* eslint-disable */

function Person(name) {
  this.name = name
}

Person.prototype.greet = function greet() {
  return `Hi, ${this.name}`
}

function Student(name) {
  this.__proto__.constructor(name)
}

Student.prototype.study = function study() {
  return `${this.name} is studying`
}

Object.setPrototypeOf(Student.prototype, Person.prototype)

const me = new Student('keongmin')
console.log(me.study()) // Student { name: 'keongmin' }

console.log(me.greet()) // Hi, keongmin

console.log(me instanceof Student) // Student의 instance 인지   true
console.log(me instanceof Person) // true

const anotherPerson = new Person('foo')
console.log(anotherPerson instanceof Student) // false
console.log(anotherPerson instanceof Person) // true
