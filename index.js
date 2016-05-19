'use strict'

var isInteger = require('is-integer')

module.exports = function parseIntStrict (integer) {
  if (typeof integer === 'number') {
    return isInteger(integer) ? integer : undefined
  }
  if (typeof integer === 'string') {
    return /^\d+$/.test(integer) ? parseInt(integer, 10) : undefined
  }
}
