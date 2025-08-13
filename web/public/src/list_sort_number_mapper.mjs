export function list_sort_number_mapper(list, lambda$item) {
  function lambda(a, b) {
    return lambda$item(a) - lambda$item(b);
  }
  list.sort(lambda);
}
