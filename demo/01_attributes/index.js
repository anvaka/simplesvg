var svg = require('../../');

var circle = svg('circle', {
  r: 21,
  cx: 42,
  cy: 42,
  stroke: '#000',
  fill: 'deepskyblue'
});

document.getElementById('scene').appendChild(circle);
