module.exports = svg;
svg.compile = require('./lib/compile');

var domEvents = require('add-event-listener');

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function svg(element) {
  var svgElement = element;

  if (typeof element === "string") {
    svgElement = window.document.createElementNS(svgns, element);
  } else if (element.simplesvg) {
    return element;
  }

  svgElement.simplesvg = true; // this is not good, since we are monkey patching svg
  svgElement.attr = attr;
  svgElement.append = append;

  // add easy eventing
  svgElement.on = function (name, cb, useCapture) {
    domEvents.addEventListener(svgElement, name, cb, useCapture);
    return svgElement;
  };

  svgElement.off = function (name, cb, useCapture) {
    domEvents.removeEventListener(svgElement, name, cb, useCapture);
    return svgElement;
  };

  return svgElement;

  function append(child) {
    svgElement.appendChild(svg(child));

    return child;
  }

  function attr(name, value) {
    if (arguments.length === 2) {
      if (value !== null) {
        svgElement.setAttributeNS(null, name, value);
      } else {
        svgElement.removeAttributeNS(null, name);
      }

      return svgElement;
    }

    return svgElement.getAttributeNS(null, name);
  }
}
