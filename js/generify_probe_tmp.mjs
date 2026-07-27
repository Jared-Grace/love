export function generify_probe_tmp(one, two) {
  "A throwaway for proving the generify chain, with prose that must be left alone.";
  let separator = "_";
  let a = text_combine(one, separator);
  let b = text_combine(separator, two);
  let joined = text_combine(a, b);
  return joined;
}
