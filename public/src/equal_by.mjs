export function equal_by(a, b, lambda$item) {
  let v = lambda$item(a) === lambda$item(b);
  return v;
}
