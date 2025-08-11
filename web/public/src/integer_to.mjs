export function integer_to(input) {
  let i = parseInt(input, 10);
  if (Number.isNaN(i)) {
    return null;
  }
  return i;
}
