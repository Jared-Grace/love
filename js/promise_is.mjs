export function promise_is(value) {
  let v =
    value !== null &&
    typeof value === "object" &&
    typeof value.then === "function" &&
    typeof value.catch === "function";
  return v;
}
