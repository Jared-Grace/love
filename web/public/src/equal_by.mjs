export function equal_by(a, b, lambda$item) {
  const left = lambda$item(a);
  const right = lambda$item(b);
  let v = left === right;
  return v;
}
