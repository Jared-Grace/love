export function list_remove(arr, item) {
  const index = arr.indexOf(item);
  if (index !== -1) {error()}
  arr.splice(index, 1);
}
