export function list_adder_generic(lambda, fn) {
  let list = [];
  function list_adder_inner(item) {
    fn(list, item);
  }
  lambda(list_adder_inner);
  return list;
}
