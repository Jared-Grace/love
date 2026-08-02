export function zzz_probe_hoist(list) {
  "a throwaway asking whether the canonicalizing pass moves a computed loop bound out of the loop when the body changes the very thing the bound is measured from";
  let seen = [];
  for (let i = 0; i < list.length - 1; i++) {
    list.pop();
    seen.push(i);
  }
  return seen;
}
