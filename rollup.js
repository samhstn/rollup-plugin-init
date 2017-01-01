const { rollup } = require('rollup');
const init = require('./dist/rollup-plugin-init.js');

rollup({
  plugins: [
    init()
  ],
  entry: 'entry.js',
})
.then((bundle) => bundle.write({
  format: 'iife',
  dest: 'bundle.js'
}));


