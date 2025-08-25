export function ternary(nn, on_true, on_false) {
  let result = null;
  if (nn) {
    result = on_true;
  } else {
    result = on_false;
  }
  return result;
}
