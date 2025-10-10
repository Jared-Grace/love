export function lambda_get(value) {
  function value_get() {
    return value;
  }
  return value_get;
}
