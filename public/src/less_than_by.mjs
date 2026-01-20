export function less_than_by(a, b, mapper) {
  const newLocal = mapper(b);
  const ma = mapper(a);
  let v = ma < newLocal;
  return v;
}
