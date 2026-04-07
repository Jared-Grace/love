export function integer_to_try(input) {
  const base = 10;
  let i = null;
  i = parseInt(input, base);
  if (Number.isNaN(i)) {
    i = null;
  }
  return i;
}
