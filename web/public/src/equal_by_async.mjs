export function equal_by_async(a, b, by) {
  let v = by(a) === by(b);
  return v;
}
