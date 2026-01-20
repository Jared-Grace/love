export function less_than_by(a, b, mapper) {
  const newLocal = mapper(b);
  let v = mapper(a) < newLocal;
  return v;
}
