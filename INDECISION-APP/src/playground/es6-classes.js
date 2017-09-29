class Person {
  constructor(name = 'Anonymous') {
    this.name = name
  }
}

const me = new Person('John Carlos') ;
console.log(me.name)


const other = new Person();
console.log(other.name)
