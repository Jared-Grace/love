export function less_than_by(a, b, mapper) {
  const mb = mapper(b);
  const ma = mapper(a);
  let v = ma < mb;
  return v;
}
