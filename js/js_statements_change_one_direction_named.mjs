import { arguments_assert } from "./arguments_assert.mjs";
import { list_subsequence_is } from "./list_subsequence_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_3 } from "./text_combine_3.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_statements_change_one_direction_named(
  kept,
  whole,
  changed,
  word_done,
) {
  "An edit that only went one way - statements put in, or statements taken out, and none of the other - named with how many and whether the rest stayed where they were.";
  "PUTTING IN AND TAKING OUT ARE THE SAME READING WITH THE TWO LISTS SWAPPED, which is why one function does both and is told which word to say. Written twice they drifted the first time somebody improved one of them, and neither reading would have gone red.";
  "STAYING PUT IS ASKED SEPARATELY FROM WHAT CHANGED, because an edit that also moved everything else is a different command from one that did not, and a caller that only counted the difference could not tell them apart.";
  arguments_assert(arguments, 4);
  let in_order = list_subsequence_is(kept, whole);
  if (not(in_order)) {
    let moved = text_combine_3("statements ", word_done, " and reordered");
    return moved;
  }
  let left = list_size(changed);
  let one = equal(left, 1);
  if (one) {
    let single = text_combine("one statement ", word_done);
    return single;
  }
  let several = text_combine("statements ", word_done);
  return several;
}
