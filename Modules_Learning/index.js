const people = require("./people")
const _ = require('lodash')

console.log(people)
console.log(people.people)
console.log(people.a)
people.test()
console.log(people.people[0])

console.log(_.last(people.people))
