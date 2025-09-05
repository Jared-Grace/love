export function list_random_item(arr) {
  let r = arr[Math.floor(Math.random() * arr.length)];
  return r;
}
