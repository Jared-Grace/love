import { each_pair_min } from "./each_pair_min.mjs";
import { equal_not } from "./equal_not.mjs";
export function list_starts_with(list, list_prefix) {
  let starts_with = true;
  function lambda(left, right) {
    if (equal_not(left, right)) {
      starts_with = false;
    }
  }
  each_pair_min(list, list_prefix, lambda);
  return starts_with;
}
