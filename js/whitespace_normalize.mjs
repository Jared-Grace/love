export function whitespace_normalize(s) {
  let n = s.replace(/\s+/g, " ").trim();
  return n;
}
