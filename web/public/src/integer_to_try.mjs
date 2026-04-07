export function integer_to_try(input) {
  const base = 10;
  let i = parseInt(input, base);
  if (Number.isNaN(i)) {
    return null;
  }
  return i;
}
