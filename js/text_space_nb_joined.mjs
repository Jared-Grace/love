import { arguments_assert } from "./arguments_assert.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_replace } from "./text_replace.mjs";
export function text_space_nb_joined(text) {
  arguments_assert(arguments, 1);
  ("the text with a word joiner either side of every space that does not break, so no line can break next to one either");
  ("A space that does not break still lets a browser break just before or after it when the character beside it is one a line may end on - a bar, an ampersand, a minus - so a || b split after the bars. The word joiner is invisible and forbids a break on both sides of itself.");
  ("For showing only. A word joiner is not a space to JavaScript, so a program holding one no longer runs; the programs a lesson runs are never passed through here.");
  let nb = text_space_nb();
  let joiner = "⁠";
  let joined = text_combine_multiple([joiner, nb, joiner]);
  let replaced = text_replace(text, nb, joined);
  return replaced;
}
