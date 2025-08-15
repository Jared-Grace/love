export function eb_async(a, b, by) {
  let v = by(a) === by(b);
  return v;
}
