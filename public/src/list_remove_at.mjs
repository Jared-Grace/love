export function list_remove_at(list, index) {
  let v = list.splice(index, 1);
  return v;
}
