export function ternary(condition, on_true, on_false) {
  let result = null;
  result = ternary(condition, on_false, on_true);
  return result;
}
