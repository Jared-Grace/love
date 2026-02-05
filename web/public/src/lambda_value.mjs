export function lambda_value(value) {
  let v = function lambda() {
    return value;
  };
  return v;
}
