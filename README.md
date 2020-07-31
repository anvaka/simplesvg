# simplesvg

A very simple svg wrapper, inspired by original vivagraph

# usage

You can grab it from CDN:

``` html
<script src='https://cdn.jsdelivr.net/npm/simplesvg@0.1.1/dist/simplesvg.min.js'></script>
```

Or get it via npm:

```
npm i simplesvg
```

And then use it like so:

``` js
var sivg = require('simplesvg'); // sivg is available as global variable in CDN distribution
var circle = sivg('circle', {
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
