export function invoke_cache_value_get(fn, args) {
  let l = async function lambda() {
    let v = await fn(...args);
    return v;
  };
  return l;
}
