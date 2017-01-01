'use strict';

const prependInit = (code) => 'const init = ' + code;
const removeIife = (code) => {
  const pos = code.lastIndexOf('()');
  return code.substring(0, pos) + code.substring(pos + 2);
}

const ongenerate = (bundle, output) => {
  output.code = prependInit(removeIife(output.code));
}

const init = () => ({ name: 'init', ongenerate });

module.exports = init;
