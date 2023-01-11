'use strict';

/***
 *
 * @return {function}
 */

function makeInfinityAdder() {
  let sum = 0;

  function add(a) {
    if (arguments.length === 0) {
      const sumCopy = sum;

      sum = 0;

      return sumCopy;
    }

    sum += a;

    return add;
  };

  return add;
}

module.exports = makeInfinityAdder;
