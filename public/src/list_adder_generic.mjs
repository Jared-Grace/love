export function list_adder_generic(lambda, fn) {
  let list = [];
  lambda(function list_adder_inner(item) {
    fn(list, item);
  });
  return list;
}
