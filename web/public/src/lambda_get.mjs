export function lambda_get(before) {
  let v = function lambda2() {
    return before;
  };
  return v;
}
