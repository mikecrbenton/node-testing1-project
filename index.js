/**
 * [Exercise 1] trimProperties copies an object trimming its properties
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - a copy of the object with strings trimmed
 *
 * EXAMPLE
 * trimProperties({ name: '  jane  ' }) // returns a new object { name: 'jane' }
 */
function trimProperties(obj) {

   const newObj = {...obj}

   for (var key in newObj) {
      if (newObj.hasOwnProperty(key)) {
          newObj[key] = newObj[key].trim()
      }
   }
   return newObj
}
//trimProperties( { first:'    one   ', second:'      two      '})

/**
 * [Exercise 2] trimPropertiesMutation trims in place the properties of an object
 * @param {object} obj - an object with properties that are strings
 * @returns {object} - the same object with strings trimmed
 *
 * EXAMPLE
 * trimPropertiesMutation({ name: '  jane  ' }) // returns the object mutated in place { name: 'jane' }
 */
function trimPropertiesMutation(obj) {
   for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          obj[key] = obj[key].trim()
      }
   }
   return obj
}
//trimPropertiesMutation( { first:'    one   ', second:'      two      '})

/**
 * [Exercise 3] findLargestInteger finds the largest integer in an array of integers
 * @param {number[]} integers - an array of integers
 * @returns {number} - the largest integer
 *
 * EXAMPLE
 * findLargestInteger([2, 1, 7, 3, 14, 7]) // returns 14
 */
function findLargestInteger(integers) {
  let largest = integers[0]
  for(let i=1 ; i< integers.length ; i++){
     if( integers[i] > largest ){
        largest = integers[i]
     }
  }
  return largest
}

//findLargestInteger([2, 1, 7, 31, 14, 7, 51]) // returns 14

class Counter {
  /**
   * [Exercise 4A] Counter creates a counter
   * @param {number} initialNumber - the initial state of the count
   */
  constructor(initialNumber) {
   this.initialNumber = initialNumber
}

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   *
   * EXAMPLE
   * const counter = new Counter(3)
   * counter.countDown() // returns 3
   * counter.countDown() // returns 2
   * counter.countDown() // returns 1
   * counter.countDown() // returns 0
   * counter.countDown() // returns 0
   */
  countDown() {
     const current = this.initialNumber

     if( this.initialNumber !== 0 ){
        this.initialNumber--
     }
     //console.log(current)
     return current
  }
}
// const counter = new Counter(3)
// counter.countDown() // returns 3
// counter.countDown() // returns 2
// counter.countDown() // returns 1
// counter.countDown() // returns 0
// counter.countDown() // returns 0
// counter.countDown() // returns 0

class Seasons {
  /**
   * [Exercise 5A] Seasons creates a seasons object
   */
  constructor() {
    this.currentSeason = "summer"
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
   * EXAMPLE
   * const seasons = new Seasons()
   * seasons.next() // returns "summer"
   * seasons.next() // returns "fall"
   * seasons.next() // returns "winter"
   * seasons.next() // returns "spring"
   * seasons.next() // returns "summer"
   */
  next() {
    switch(this.currentSeason){
       case "summer":
          this.currentSeason = "fall"
          return "summer"
          break;
       case "fall":
         this.currentSeason = "winter"
          return "fall"
          break;
       case "winter":
          this.currentSeason = "spring"
          return "winter"
          break;
       case "spring":
          this.currentSeason = "summer"
          return "spring"
          break;
       default:
          console.log("error")
          break;
    }
  }
}
// const seasons = new Seasons()
// console.log(seasons.next() ) // returns "summer"
// console.log(seasons.next() ) // returns "fall"
// console.log(seasons.next() ) // returns "winter"
// console.log(seasons.next() ) // returns "spring"
// console.log(seasons.next() ) // returns "summer"

class Car {
  /**
   * [Exercise 6A] Car creates a car object
   * @param {string} name - the name of the car
   * @param {number} tankSize - capacity of the gas tank in gallons
   * @param {number} mpg - miles the car can drive per gallon of gas
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0 // car initializes with zero miles
    this.tank = tankSize // car initializes full of gas
    this.mpg = mpg // 
    this.name = name
    this.tankSize = tankSize
  }

  /**
   * [Exercise 6B] Car.prototype.drive adds miles to the odometer and consumes fuel according to mpg
   * @param {string} distance - the distance we want the car to drive
   * @returns {number} - the updated odometer value
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(100) // returns 100
   * focus.drive(100) // returns 200
   * focus.drive(100) // returns 300
   * focus.drive(200) // returns 500
   * focus.drive(200) // returns 600 (ran out of gas after 100 miles)
   */
  drive(distance) {

   //==============================================
   console.log(`\nTHE DISTANCE IS = ${distance}`);
   console.log(`THE THE TANK IS  = ${this.tank}`);
   //console.log(`THE ODOMETER IS  = ${this.odometer}`);
   console.log( `${distance} / ${this.mpg}`); 
   //==============================================

      if( distance > (this.tank * this.mpg) ){
         this.odometer += (this.tank * this.mpg);                 
         console.log("the odometer is in if", this.odometer)
      }else{
         this.odometer += distance;
         this.tank -= distance/this.mpg;
         console.log("the odometer is", this.odometer)
      }

      return this.odometer
  }

  /**
   * [Exercise 6C] Adds gallons to the tank
   * @param {number} gallons - the gallons of fuel we want to put in the tank
   * @returns {number} - the miles that can be driven after refueling
   *
   * EXAMPLE
   * const focus = new Car('focus', 20, 30)
   * focus.drive(600) // returns 600
   * focus.drive(1) // returns 600 (no distance driven as tank is empty)
   * focus.refuel(99) // returns 600 (tank only holds 20)
   */
  refuel(gallons) {
    if(gallons > this.tankSize){
      this.tank = 20
      return this.tank
    }else{
       this.tank += gallons
       return (this.tank * this.mpg)
    }
  }
}

// const focus = new Car('focus', 20, 30)
// focus.drive(100) // returns 100
// focus.drive(100) // returns 200
// focus.drive(100) // returns 300
// focus.drive(200) // returns 500
// focus.drive(200) // returns 600 (ran out of gas after 100 miles)


/**
 * [Exercise 7] Asynchronously resolves whether a number is even
 * @param {number} number - the number to test for evenness
 * @returns {promise} - resolves true if number even, false otherwise
 *
 * EXAMPLE
 * isEvenNumberAsync(2).then(result => {
 *    // result is true
 * })
 * isEvenNumberAsync(3).then(result => {
 *    // result is false
 * })
 * isEvenNumberAsync('foo').catch(error => {
 *    // error.message is "number must be a number"
 * })
 * isEvenNumberAsync(NaN).catch(error => {
 *    // error.message is "number must be a number"
 * })
 */
function isEvenNumberAsync(number) {

  if( typeof(number) !== 'number' ){
    return Promise.reject("number must be a number")
  }

    return Promise.resolve( number % 2 === 0)
}

isEvenNumberAsync("try").then(result => {
     console.log(result)
}).catch(error => { console.log(error)})

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}
