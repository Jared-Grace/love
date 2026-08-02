export function zzz_probe_while_nested(list) {
  "a throwaway asking whether a while header holding a call inside another call is hoisted the same way a for header is";
  let seen = [];
  while (seen.length < list.length - 1) {
    list.pop();
    seen.push(seen.length);
  }
  return seen;
}
