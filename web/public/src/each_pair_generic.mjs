export function each_pair_generic(list_a, list_b, each_fn, lambda$a$b) {
  let lists = [list_a, list_b];
  each_fn(lists, lambda);
  function lambda(items) {
    let [a, b] = items;
    lambda$a$b(a, b);
  }
}
