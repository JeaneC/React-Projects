const add = (a, b) => {
  return a+b;
}

console.log(add(55,1,100))

const user = {
  name: 'John',
  cities: ['New York', 'Massachussetes','Cancun'],
  printPlacesLived() {
    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city)
    })
  }
};

user.printPlacesLived();
