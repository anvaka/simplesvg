var parser = new DOMParser();
var svg = require('../');

module.exports = compile;

function compile(svgText) {
  try {
    return svg(parser.parseFromString(
      '<g xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg">' +
      svgText + '</g>', "text/xml").documentElement);
  } catch (e) {
    throw e;
  }
}
