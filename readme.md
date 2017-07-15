# mega-link-available

[![Build Status](https://travis-ci.org/jlobos/mega-link-available.svg?branch=master)](https://travis-ci.org/jlobos/mega-link-available)

> Check if [MEGA](https://mega.nz/) links is available

## Install

```bash
$ npm install --save mega-link-available
```

## Usage

```js
const available = require('mega-link-available')
 
available('https://mega.nz/#F!lg8WibJY!8auQ5Col_rVfEzG2eaZRDQ')
  .then(console.log)
  // true
```

## License

MIT © [Jesus Lobos](https://jlobos.com/)
