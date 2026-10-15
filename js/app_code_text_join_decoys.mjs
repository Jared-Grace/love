import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_text_join_decoys(first, last) {
  arguments_assert(arguments, 2);
  ("the tempting wrong values for first + last when both are text: the two joined the other way round, and joined with a space between them. Each begins with the right word or holds both right words, so the whole join has to be read: which comes first, and that a plus adds no space");
  let reversed = text_combine(last, first);
  let spaced = text_combine_multiple([first, " ", last]);
  let r = [reversed, spaced];
  return r;
}
