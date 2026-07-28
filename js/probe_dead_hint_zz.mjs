import { list_single } from "./list_single.mjs";
import { not } from "./not.mjs";
export function probe_dead_hint_zz(items) {
  "A throwaway wearing the fault on a newly listed finder so the widening can be seen to fire";
  let only = list_single(items);
  let missing = not(only);
  if (missing) {
    return null;
  }
  return only;
}
