import { arguments_assert } from "./arguments_assert.mjs";
import { js_functions_change_named_or_null } from "./js_functions_change_named_or_null.mjs";
import { list_add } from "./list_add.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_statements_change_replaced_named(
  before,
  after,
  texts_before,
  texts_after,
) {
  "The name for an edit where one statement went out and one came in and the run stayed the length it was - read at the place it happened rather than settled for as a count.";
  "ONE OUT AND ONE IN DOES NOT YET MEAN ONE PLACE CHANGED. The same arithmetic comes out of a run that swapped a statement and shuffled the rest at once, and calling that a replacement points a command at a position where two things happened. So the positions are compared one by one, and only a single position differing earns the name.";
  "WHERE THE STATEMENT IS A FUNCTION, THE ANSWER IS INSIDE IT. Almost every line of this repo lives in a function nested in the one the file hands out, so an edit to any of them arrives here looking like one statement swapped for another - true, and useless as a specification. Going in is what turns it back into an edit somebody can name.";
  arguments_assert(arguments, 4);
  let differing = [];
  let size = list_size(texts_before);
  for (let index = 0; less_than(index, size); index++) {
    let text_before = list_get(texts_before, index);
    let text_after = list_get(texts_after, index);
    let same = equal(text_before, text_after);
    if (not(same)) {
      list_add(differing, index);
    }
  }
  let left = list_size(differing);
  let one_place = equal(left, 1);
  if (not(one_place)) {
    let r = "one statement replaced and others reordered";
    return r;
  }
  let place = list_first(differing);
  let node_before = list_get(before, place);
  let node_after = list_get(after, place);
  let inner = js_functions_change_named_or_null(node_before, node_after);
  let found = null_not_is(inner);
  if (found) {
    return inner;
  }
  let r2 = "one statement replaced";
  return r2;
}
