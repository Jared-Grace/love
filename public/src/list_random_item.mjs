export function list_random_item(arr) {
  let v = arr[Math.floor(Math.random() * arr.length)];
  return v;
}
