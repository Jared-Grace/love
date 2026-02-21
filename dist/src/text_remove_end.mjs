export function text_remove_end(t, count) {
  let v = Math.max(0, t.length - count);
  const remaining = t.slice(0, v);
  return remaining;
}
