export function invoke_cache_value_get(fn, args) {
  let l = async function lambda() {
    let r = await fn(...args);
    return r;
  };
  return l;
}
