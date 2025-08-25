export function ternary(condition, on_true, on_false) {
  let result = null;
  if (condition) {
    result = on_true;
  } else {
    result = on_false;
  }
  return result;
}
