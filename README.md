# simplesvg

A very simple svg wrapper, inspired by original vivagraph

# usage

This API is still not very stable. But here is quick example:

``` js
var svg = require('simplesvg');
var circle = svg('circle', {
  r: 21,
  cx: 42,
  cy: 42,
  stroke: '#000',
  fill: 'deepskyblue'
});

// `circle` is a regular DOM element, you can append it to parent:
document.getElementById('scene').appendChild(circle);
```

# install

With [npm](https://npmjs.org) do:

```
npm install simplesvg
```

# license

MIT
