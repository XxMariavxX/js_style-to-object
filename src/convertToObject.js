'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  sourceString
    .split(';')
    .map((item) => item.trim())
    .filter((item) => item)
    .forEach((item) => {
      const [selector, name] = item.split(':').map((part) => part.trim());

      return (result[selector] = name);
    });

  return result;
}

module.exports = convertToObject;
