'use strict'

var isInteger = require('is-integer')

module.exports = function parseIntStrict (int) {
  if (typeof int === 'number') {
    return isInteger(int) ? int : undefined
  }
  if (typeof int === 'string') {
    return /^\d+$/.test(int) ? parseInt(int, 10) : undefined
  }
}
