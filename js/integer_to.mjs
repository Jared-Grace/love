export function integer_to(input) {
  let i = parseInt(input, 10);
  if (Number.isNaN(i)) {
    let v = null;
    return v;
  }
  return i;
}
