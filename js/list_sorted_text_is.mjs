import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function list_sorted_text_is(list) {
  arguments_assert(arguments, 1);
  ("Whether this list is already in text order.");
  ("Asked before deciding whether to re-sort a list somebody else keeps. A list held in text order is one whose order carries no meaning of its own, so putting it back in order after an edit costs nothing. A list held in some other order is one whose order IS the meaning, and sorting it there would throw that meaning away without saying so.");
  ("It answers by sorting a copy and comparing, rather than by walking neighbours, so it agrees with the sorter by construction - a rule written out separately here could disagree with the one the sorter actually applies, and then the two would take turns undoing each other.");
  let copy = list_copy(list);
  list_sort_text(copy);
  let before = list_join_newline(list);
  let after = list_join_newline(copy);
  let r = equal(before, after);
  return r;
}
