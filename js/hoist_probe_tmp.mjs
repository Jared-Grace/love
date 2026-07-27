export function hoist_probe_tmp(one, two) {
  "A throwaway for proving the hoist transform, with prose that must be left alone.";
  let a = text_combine(one, "_");
  let b = text_combine("_", two);
  let joined = text_combine(a, b);
  return joined;
}
