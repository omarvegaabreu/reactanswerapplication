const persons = {
  name: "Omar",
  age: 66,
  isAdult() {
    return this.age >= 18
      ? `${this.name} Is an adult. He is ${this.age} years old`
      : `${this.name} Is not an adult he is ${this.age} years old `;
  },
  canDrink() {
    return this.age > 21
      ? `${this.name} Can drink. He is ${this.age} years old`
      : `${this.name} Can't drink. He is ${this.age} years old `;
  },
  isSenior() {
    return this.age > 65
      ? `${this.name} A senior. He is ${this.age} years old`
      : `${this.name} Is not retired. He is ${this.age} years old `;
  }
};

export default persons;
