export function list_wait(list) {
  let v = Promise.all(list);
  return v;
}
