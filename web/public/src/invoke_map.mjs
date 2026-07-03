export function invoke_map(next_get_list, mapper) {
  let r = function invoke_map_result() {
    let result = next_get_list();
    let mapped = mapper(result);
    return mapped;
  };
  return r;
}
