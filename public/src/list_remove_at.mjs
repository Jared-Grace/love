export function list_remove_at(list, index) {
  let e = list.splice(index, 1);
  return e;
}
