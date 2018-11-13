# parse-int [![Build Status](https://travis-ci.org/bendrucker/parse-int.svg?branch=master)](https://travis-ci.org/bendrucker/parse-int) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/parse-int.svg)](https://greenkeeper.io/)

> Strict integer parsing. If it's not an actual integer or an integer string, return undefined.


## Install

```
$ npm install --save parse-int
```


## Usage

```js
var parseInt = require('parse-int');

parseInt(2) // 2
parseInt('2') // 2
parseInt('2.2') // undefined
parseInt(1.2) // undefined
parseInt('2a') // undefined
parseInt() // undefined
```

## API

#### `parseInt(number)` -> `number` / `undefined`

##### number

*Required*  
Type: `any`

The number to attempt to parse. 

## License

MIT © [Ben Drucker](http://bendrucker.me)
