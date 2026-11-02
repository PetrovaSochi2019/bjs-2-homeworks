"use strict";

function cachingDecoratorNew(func) {
  const cache = new Map();

  return function (...args) {
    const hash = md5(args);
    
    if (cache.has(hash)) {
      const result = cache.get(hash);
      console.log("Из кеша: " + result);
      return "Из кеша: " + result;
    }

    const result = func.apply(this, args);
    cache.set(hash, result);

    if (cache.size > 5) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  };
}

function debounceDecoratorNew(func, ms) {
  let timeout = null;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (isFirstCall) {
      isFirstCall = false;
      func.apply(this, args);
      wrapper.count++;
      return;
    }

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, ms);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}