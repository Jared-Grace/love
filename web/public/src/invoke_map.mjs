export function invoke_map(next_get_list, mapper) {
  let r3 = function invoke_map_result() {
    let result = next_get_list();
    let r = mapper(result);
    return r;
  };
  return r3;
}
