export function text_remove_end(t, count) {
  let v = Math.max(0, str.length - count);
  const remaining = str.slice(0, v);
  return remaining;
}
