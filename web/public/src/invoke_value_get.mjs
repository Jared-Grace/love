export function invoke_value_get(fn, args) {
  let v3 = async function lambda() {
    let v = await fn(...args);
    return v;
  };
  return v3;
}
