import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function text_split_words_characters_max(text, characters_max) {
  "$plain text";
  "$plain characters_max";
  "Divides a run of words into as few parts as it can, none of them longer than the count of letters asked for, and never cutting a word in half.";
  "★ IT COUNTS LETTERS RATHER THAN MEASURING THEM, WHICH IS WHAT LETS IT ANSWER WITHOUT A SCREEN TO ASK. Measuring is exact and needs a drawing surface, a typeface and a size, none of which a caller working out where a sentence should divide has to hand; letters are a near enough stand-in for a passage of ordinary prose, where the wide and the narrow ones even out over a hundred of them.";
  "★ A SINGLE WORD LONGER THAN THE WHOLE ALLOWANCE IS KEPT WHOLE AND OVERFLOWS. Breaking it would leave half a word on screen reading as a different word, which is worse than the part being a little long, and there is no word in Scripture long enough for the difference to matter.";
  arguments_assert(arguments, 2);
  let words = text_split_space(text);
  let parts = [];
  let part = "";
  function word_each(word) {
    let empty = not(part);
    if (empty) {
      part = word;
      return;
    }
    let candidate = text_combine_multiple([part, " ", word]);
    let fits = less_than_equal(candidate.length, characters_max);
    if (fits) {
      part = candidate;
      return;
    }
    list_add(parts, part);
    part = word;
  }
  each(words, word_each);
  let b = not(part);
  let last = not(b);
  if (last) {
    list_add(parts, part);
  }
  return parts;
}
