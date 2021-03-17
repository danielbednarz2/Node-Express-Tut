// Modules

const {john, peter} = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alt-flavour')
require('./7-mind-grenade')

console.log(data)
sayHi('Susan')
sayHi(john)
sayHi(peter)