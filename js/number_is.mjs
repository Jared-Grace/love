export function number_is(value) {
  let v = typeof value === "number" && isFinite(value);
  return v;
}
