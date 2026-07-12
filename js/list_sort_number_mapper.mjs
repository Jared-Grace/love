export function list_sort_number_mapper(list, lambda$item) {
  function lambda(a, b) {
    let va = lambda$item(a);
    let vb = lambda$item(b);
    if (va < vb) return -1;
    if (va > vb) return 1;
    return 0;
  }
  list.sort(lambda);
}
