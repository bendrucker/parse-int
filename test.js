'use strict'

var test = require('tape')
var parseIntStrict = require('./')

test(function (t) {
  t.equal(parseIntStrict(1), 1)
  t.equal(parseIntStrict('1'), 1)
  t.equal(parseIntStrict('01'), 1)

  t.equal(parseIntStrict('-99'), -99)
  t.equal(parseIntStrict('-1'), -1)

  t.equal(parseIntStrict(1.2), undefined)
  t.notOk(parseIntStrict('2.2'))
  t.notOk(parseIntStrict('2a'))
  t.notOk(parseIntStrict('a2'))
  t.notOk(false)
  t.notOk(parseIntStrict())

  t.end()
})
