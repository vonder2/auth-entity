export class Person {
  constructor(name, age, height, married) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.married = married;
  }

  toString()
  {
    return this.name + (this.married ? " married" : " not married");
  }
}
