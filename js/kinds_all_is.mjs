import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function kinds_all_is(kinds, wanted) {
  let size = list_size(kinds);
  let empty = equal(size, 0);
  if (empty) {
    return false;
  }
  for (let kind of kinds) {
    let same = equal(kind, wanted);
    if (not(same)) {
      return false;
    }
  }
  return true;
}
