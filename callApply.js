const person = {
  firstName : 'Al Amin',
  lastName : 'Khan',
  salary : 50000,
  fullName : function(){
    fullName = `${this.firstName} ${this.lastName}`
    return fullName;
  },
  chargeBill : function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  }
}

console.log(person);
console.log(person.chargeBill(10000));
console.log(person.fullName());
console.log(person.chargeBill(1500));


const anotherPerson = {
  firstName: 'John',
  lastName: 'Doe',
  salary: 25000,
}

const anotherPersonChargebill = person.chargeBill.bind(anotherPerson) //bind method
console.log(anotherPersonChargebill(1500));

person.chargeBill.call(anotherPerson, 3000); //call method
console.log(anotherPerson.salary);


person.chargeBill.apply(anotherPerson, [1200]); //appy method, 2nd parameter must be an array
console.log(anotherPerson.salary);
