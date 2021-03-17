const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  it('[1] returns an object with the properties trimmed', () => {
      // EXAMPLE
      const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
      const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
      const actual = utils.trimProperties(input)
      expect(actual).toEqual(expected)
  })
  it('[2] returns a copy, leaving the original object intact', () => {
      const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
      //const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
      const actual = utils.trimProperties(input)
      expect(input).not.toEqual(actual)
      expect(input).toEqual(input)  
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  it('[3] returns an object with the properties trimmed', () => {
      const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
      const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
      const actual = utils.trimPropertiesMutation(input)
      expect(actual).toEqual(expected)
  })
  it('[4] the object returned is the exact same one we passed in', () => {
      const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
      //const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
      const actual = utils.trimPropertiesMutation(input)
      expect(input).toEqual(actual)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  it('[5] returns the largest number in an array of numbers', () => {
   const intArray = [2, 1, 7, 3, 14, 7]
   const largest = utils.findLargestInteger(intArray)
   expect(largest).toBe(14)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  it('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    const firstCall = counter.countDown()
    expect(firstCall).toBe(3) 
  })
  it('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown()
    const secondCall = counter.countDown()
    expect(secondCall).toBe(2) 
  })
  it('[8] the count eventually reaches zero but does not go below zero', () => {
    for(let i = 0 ; i < 20 ; i++ ){
      counter.countDown()
    }
    const multipleCalls = counter.countDown()
    expect(multipleCalls).toBe(0) 
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  it('[9] the FIRST call of seasons.next returns "summer"', () => {
    const firstCall = seasons.next()
    expect(firstCall).toBe("summer")
  })
  it('[10] the SECOND call of seasons.next returns "fall"', () => {
    let timesRepeated = 2
    let secondCall
    for(let i = 0 ; i < timesRepeated ; i++){
       if( i === (timesRepeated-1) ){
         secondCall = seasons.next()
       }
       seasons.next()
    }
    expect(secondCall).toBe("fall")
  })
  it('[11] the THIRD call of seasons.next returns "winter"', () => {
   let timesRepeated = 3
   let thirdCall
   for(let i = 0 ; i < timesRepeated ; i++){
      if( i === (timesRepeated-1) ){
        thirdCall = seasons.next()
      }
      seasons.next()
   }
   expect(thirdCall).toBe("winter")
  })
  it('[12] the FOURTH call of seasons.next returns "spring"', () => {
   let timesRepeated = 4
   let fourthCall
   for(let i = 0 ; i < timesRepeated ; i++){
      if( i === (timesRepeated-1) ){
        fourthCall = seasons.next()
      }
      seasons.next()
   }
   expect(fourthCall).toBe("spring")
  })
  it('[13] the FIFTH call of seasons.next returns again "summer"', () => {
   let timesRepeated = 5
   let fifthCall
   for(let i = 0 ; i < timesRepeated ; i++){
      if( i === (timesRepeated-1) ){
        fifthCall = seasons.next()
      }
      seasons.next()
   }
   expect(fifthCall).toBe("summer")
  })
  it('[14] the 40th call of seasons.next returns "spring"', () => {
   let timesRepeated = 40
   let fourtiethCall
   for(let i = 0 ; i < timesRepeated ; i++){
      if( i === (timesRepeated-1) ){
        fourtiethCall = seasons.next()
      }
      seasons.next()
   }
   expect(fourtiethCall).toBe("spring")
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  it('[15] driving the car returns the updated odometer', () => {
    // ✨ test away
  })
  it('[16] driving the car uses gas', () => {
    // ✨ test away
  })
  it('[17] refueling allows to keep driving', () => {
    // ✨ test away
  })
  it('[18] adding fuel to a full tank has no effect', () => {
    // ✨ test away
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  it('[19] resolves true if passed an even number', () => {
    // ✨ test away
  })
  it('[20] resolves false if passed an odd number', () => {
    // ✨ test away
  })
  it('[21] rejects an error with the message "number must be a number" if passed a non-number type', () => {
    // ✨ test away
  })
  it('[22] rejects an error with the message "number must be a number" if passed NaN', () => {
    // ✨ test away
  })
})
