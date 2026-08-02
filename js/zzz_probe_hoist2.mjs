export function zzz_probe_hoist2(list) {
  "a throwaway asking whether a for header with a computed bound is still lifted out";
  let seen = [];
  for (let i = 0; i < list.length - 1; i++) {
    list.pop();
    seen.push(i);
  }
  return seen;
}
