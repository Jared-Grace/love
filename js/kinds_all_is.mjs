import { list_empty_is } from "./list_empty_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function kinds_all_is(kinds, wanted) {
  let empty = list_empty_is(kinds);
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
