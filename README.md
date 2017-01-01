[![Travis](https://img.shields.io/travis/shouston3/rollup-plugin-init.svg?style=flat-square)](https://travis-ci.org/shouston3/rollup-plugin-init)

# Rollup Plugin Init

Transforms your iife bundle into a function waiting to be executed.

It can be executed by calling `init()`

Transforms iife from:
```
(function () {
  ... content ...
})();
```

into:
```
const init = (function () {
  ... content ...
});
```

You can then execute the bundled javascript when you are ready by calling:
```
init()
```

### Usage

```
import { rollup } from 'rollup';
import init from 'rollup-plugin-init';

rollup({
  entry: 'main.js',
  plugins: [
    init()
  ]
});
```

### To Install from NPM

**Install** `rollup` and `rollup-plugin-init` from npm and save it to your `package.json` file:

```
npm install rollup rollup-plugin-init --save-dev
```
