import { each_pair } from "../../../love/public/src/each_pair.mjs";
import { equal_not } from "../../../love/public/src/equal_not.mjs";
export function list_starts_with(variation, concated) {
  let starts_with = true;
  function lambda4(left, right) {
    if (equal_not(left, right)) {
      starts_with = false;
    }
  }
  each_pair(variation, concated, lambda4);
  return starts_with;
}
