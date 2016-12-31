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

### Install from NPM

**Install** `rollup` and `rollup-plugin-init` from npm and save it to your `package.json` file:

```sh
npm install env2 --save-dev
```
