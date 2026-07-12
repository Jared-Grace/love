export function bind(left, right) {
  let fn = left.bind(right);
  return fn;
}
