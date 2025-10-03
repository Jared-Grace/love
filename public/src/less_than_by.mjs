export function less_than_by(a, b, mapper) {
  let v = mapper(a) < mapper(b);
  return v;
}
