# memoize-two-args
`yarn add memoize-two-args` + 
`npm i memoize-two-args`

Aims to solve a common problem which is typically slow or memory-inefficient: memoizing exactly two arguments which are both objects. Typically this is done using an LRU implementation backed by an array structure with `O(n)` lookups. This function, however, uses `WeakMap` (or `Map` if you need to be able to memoize strings, undefined, etc) giving it `O(1 * 2)` lookup efficiency.

## Usage
### `memoize(fn, [Map|WeakMap(default)])`
```js
import memoize from 'memoize-two-args'

const memoizedFn = memoize(
  function (arg1, arg2) {
    // do work
  }
)

const objA = {...}
const objB = {...}

return memoizedFn(objA, objB)
```

### with Map
```js
...
const memoizedFn = memoize(someFunc, Map)
...
```
