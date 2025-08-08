export function list_remove(arr, item) {
  const index = list_index_of(arr, item);
  if (index !== -1) {error()}
  arr.splice(index, 1);
}
function list_index_of(arr, item) {
    return arr.indexOf(item);
}

