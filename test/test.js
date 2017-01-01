const test = require('tape');
const { rollup } = require('rollup');
const initPlugin = require('../src/rollup-plugin-init.js');

process.chdir(__dirname);

test('without plugin should be an iife', (t) => {
  rollup({ entry: 'fixtures/entry.js' }).then((bundle) => {
    const { code } = bundle.generate({ format: 'iife' });

    t.equal(
      code.substring(0, 14),
      '(function () {',
      'starts with wrapped function'
    );
    t.equal(
      code.substring(code.length - 6),
      '}());\n',
      'ends with invoking the wrapped function'
    );
    t.end();
  })
});

test('with init plugin should contain an init var and no longer invoked', (t) => {
  rollup({
    entry: 'fixtures/entry.js',
    plugins: [ initPlugin() ]
  }).then((bundle) => {
    const { code } = bundle.generate({ format: 'iife' });

    t.equal(
      code.substring(0, 27),
      'const init = (function () {',
      'starts with init global'
    );
    t.equal(
      code.substring(code.length - 4),
      '});\n',
      'function isn\'t immediately invoked'
    );
    t.end();
  })
});
