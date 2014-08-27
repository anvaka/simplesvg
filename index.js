module.exports = svg;

var svgns = "http://www.w3.org/2000/svg";
var xlinkns = "http://www.w3.org/1999/xlink";

function svg(element) {
  var svgElement = element;

  if (typeof element === "string") {
    svgElement = window.document.createElementNS(svgns, element);
  }

  var api = {
    attr: attr,
    append: append,
    element: svgElement
  };

  return api;

  function append(element) {
    var child = svg(element);
    svgElement.appendChild(child.element);

    return child;
  }

  function attr(name, value) {
    if (arguments.length === 2) {
      if (value !== null) {
        svgElement.setAttributeNS(null, name, value);
      } else {
        svgElement.removeAttributeNS(null, name);
      }

      return api;
    }

    return svgElement.getAttributeNS(null, name);
  }
}
