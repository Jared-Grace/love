import { arguments_assert } from "./arguments_assert.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { number_is } from "./number_is.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_code_decoys_near_add(decoys, value) {
  arguments_assert(arguments, 2);
  ("the wrong choices decoys for the right answer value, with one more when value is a number and fewer than two wrong choices are left: a number just next to it, one more or one less, picked at random and never below 0 nor already on offer. Asked for by the human 2026-10-29: with one name and no value before, the only wrong choice was the name written as a string, and 2 + 2 had none at all, since 2 * 2 and the whole line both come to 4 - so the answer could be picked without reading the step");
  let a = list_size(decoys);
  let few = less_than(a, 2);
  if (not(few && number_is(value))) {
    return decoys;
  }
  let difference = subtract(value, 1);
  let sum = add(value, 1);
  let neighbors = [difference, sum];
  function neighbor_fits(neighbor) {
    let fits =
      less_than_equal(0, neighbor) &&
      not(list_includes(decoys, neighbor)) &&
      not(equal(neighbor, value));
    return fits;
  }
  let fitting = list_filter(neighbors, neighbor_fits);
  if (list_empty_is(fitting)) {
    return decoys;
  }
  let near = list_random_item(fitting);
  let added = list_concat(decoys, [near]);
  return added;
}
