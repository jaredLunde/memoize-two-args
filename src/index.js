function Cache (mapConstructor) {
  const cache = mapConstructor === void 0 ? new WeakMap() : new mapConstructor()

  function get (arg1, arg2) {
    const base = cache.get(arg1)
    return base === void 0 ? base : base.get(arg2)
  }

  function set (arg1, arg2, value) {
    const base = cache.get(arg1)

    if (base === void 0) {
      const vMap = new mapConstructor()
      vMap.set(arg2, value)
      cache.set(arg1, vMap)
    }
    else {
      base.set(arg2, value)
    }

    return value
  }

  return {get, set}
}


export default function memoize (fn, mapConstructor) {
  const cache = Cache(mapConstructor)

  return function (arg1, arg2) {
    const item = cache.get(arg1, arg2)
    return item === void 0 ? cache.set(arg1, arg2, fn(arg1, arg2)) : item
  }
}
