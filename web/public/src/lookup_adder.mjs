export function lookup_adder(fn_set) {
  let result = {};
  let oa = function lambda(key, value) {
    fn_set(result, key, value);
  };
  let r = {
    oa,
    result,
  };
  return r;
}
