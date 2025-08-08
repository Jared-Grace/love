export function list_insert(list, index, value) {
    assert(number_is(index))
  list.splice(index, 0, value);
}
