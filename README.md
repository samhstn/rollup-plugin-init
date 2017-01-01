[![Travis][travis-image]][travis-url]
[![Coveralls][coverage-image]][coverage-url]
[![Dependencies][dependencies-image]][dependencies-url]
[![DevDependencies][dev-dependencies-image]][dev-dependencies-url]

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

[travis-image]:https://img.shields.io/travis/shouston3/rollup-plugin-init.svg?style=flat-square
[travis-url]:https://travis-ci.org/shouston3/rollup-plugin-init

[coverage-image]:https://img.shields.io/coveralls/shouston3/rollup-plugin-init.svg?style=flat-square
[coverage-url]:https://coveralls.io/github/shouston3/rollup-plugin-init?branch=master

[dependencies-image]:https://david-dm.org/shouston3/rollup-plugin-init.svg?style=flat-square
[dependencies-url]:https://david-dm.org/shouston3/rollup-plugin-init

[dev-dependencies-image]:https://david-dm.org/shouston3/rollup-plugin-init/dev-status.svg?style=flat-square
[dev-dependencies-url]:https://david-dm.org/shouston3/rollup-plugin-init?type=dev

