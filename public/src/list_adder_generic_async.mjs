export function list_adder_generic_async(lambda, fn) {
  let list = [];
  function list_adder_inner(item) {
    fn(list, item);
  }
  lambda(list_adder_inner);
  return list;
}
