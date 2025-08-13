export function list_sort_number_mapper(list) {
  function lambda(a, b) {
    return a.length - b.length;
  }
  arr.sort(lambda);
}
