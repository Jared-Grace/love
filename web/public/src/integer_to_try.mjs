export function integer_to_try(input) {
  let i = parseInt(input, 10);
  if (Number.isNaN(i)) {
    return null;
  }
  return i;
}
