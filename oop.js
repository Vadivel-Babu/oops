//Person
class Person {
  constructor(firstName, lastName, address, phone, email, linkedin, github) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.linkedin = linkedin;
    this.github = github;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Example usage:
const person = new Person(
  "Babu",
  "vel",
  "123 Main Street, kumbakonam, Tamil Nadu, 612001",
  "9488921578",
  "babu@email.com",
  "https://www.linkedin.com/in/babu",
  "https://github.com/babu"
);

console.log("Full Name:", person.fullName);
console.log("Email:", person.email);
console.log("LinkedIn Profile:", person.linkedin);

// movie
class Movie{
  constructor (title,studio,rating = 'PG'){
    this.title = title
    this.studio = studio
    this.rating = rating
  }
  getPG(movieArray) {
    return movieArray.filter(movie => movie.rating === "PG");
  }
}

const casinoRoyale = new Movie('Casino Royale','Eon Productions','PG-13');
const movieArray = [
 {title:'xxx',studio:'7studio',rating:'PG'},
 {title:'xw2',studio:'8studio',rating:'PG-15'},
 {title:'342',studio:'9studio',rating:'PG-12'},
 {title:'Naan',studio:'filmGood',rating:'PG'},
];
console.log(casinoRoyale.getPG(movieArray));

class Circle{
  constructor(radius,color){
    this.radius = radius
    this.color = color
  }

  setRadius(radius){
    this.radius = radius * radius
  }

  getRadius(){
    return this.radius;
  }

  setColor(color){
    this.color = color
  }

  getColor(){
    return this.color;
  }
  
  toString(){
    return `"Circle[radius=${this.radius}, color=${this.color}]"`
  }

  getArea(){
    return Math.PI * (this.radius * this.radius);
  }

  getCircumference(){
    return 2 * Math.PI * this.radius
  }
}

const circle1 = new Circle(3,'red');
circle1.setRadius(2)

console.log(circle1.getRadius());
console.log(circle1.getArea());
console.log(circle1.getCircumference());
console.log(circle1.toString());

class UberPrice{
  constructor(Kilometer,price=10){
    this.Kilometer = Kilometer;
    this.price = price;
  }
  get Price(){
    return this.Kilometer * this.price;
  }
}

const uber1 = new UberPrice(5);
console.log(uber1.Price);