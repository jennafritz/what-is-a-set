class MySet {
  // throw an error if called with anything other than string, array or nothing
  // if an iterable is provided only its unique values should be in data
  // strings and arrays will need to be broken down by their elements/characters
  constructor(iterable) {
    if(typeof(iterable) === 'string' || Array.isArray(iterable) || iterable === undefined){
      this.data = {};
      if(iterable){
        for(const element of iterable){
          this.data[element] = true
        }
      }
    } else {
      throw new Error("MySet must be initialized with an array, a string, or nothing")
    }
  }

  // return number of elements in MySet
  size() {
    return Object.keys(this.data).length
  }

  // add an item to MySet as is
  // don't worry about arrays here!
  // return the MySet instance
  add(item) {
    this.data[item] = true
    return this
  }

  // delete an item from MySet
  // don't worry about arrays here!
  // return true if successful, otherwise false
  delete(item) {
    if(!!this.data[item]){
      delete this.data[item]
      return true
    } else {
      return false
    }
  }

  // return true if in MySet, otherwise false
  // don't worry about arrays here!
  has(item) {
    if(!!this.data[item]){
      return true
    } else {
      return false
    }
  }

  // return data as an array
  // don't worry about arrays here!
  entries() {
    return Object.keys(this.data)
  }
}

if (require.main === module) {
  // add your own tests in here

  let testSet = new MySet()

  console.log(testSet)

  console.log("Expecting: 0")
  console.log(testSet.size())

  console.log("Expecting: {0: true, 1: true}")
  testSet.add(0)
  testSet.add(1)
  console.log(testSet.data)

  console.log("Expecting: {0: true}")
  testSet.delete(1)
  console.log(testSet.data)

  console.log("Expecting: true")
  console.log(testSet.has(0))

  console.log("Expecting: false")
  console.log(testSet.has(1))

  console.log("Expecting: [0]")
  console.log(testSet.entries())

  console.log("Expecting: Error: Set must be initialized with an array, a string, or nothing")
  let newSet = new MySet({0: true})
  
}

module.exports = MySet;

