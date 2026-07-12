export function invoke_map(lambda, mapper) {
  let r = function invoke_map_result() {
    let result = lambda();
    let mapped = mapper(result);
    return mapped;
  };
  return r;
}
