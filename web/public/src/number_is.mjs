export function number_is(value) {
  return typeof value === "number" && isFinite(value);
}
