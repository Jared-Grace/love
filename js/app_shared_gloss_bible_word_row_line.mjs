import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_shared_gloss_bible_word_row_line(e, word_property) {
  arguments_assert(arguments, 2);
  ("One explained word written out as a single line of plain words: the word itself, what it means, and why it means that - the same three pieces the row on the screen shows, in the same order.");
  ("The screen tells the three apart by colour, and a clipboard carries no colour, so the line marks the joins the way the screen does, with a pair of colons between them. Pasted anywhere at all it still reads as three things rather than as one long sentence.");
  let word = property_get(e, word_property);
  let gloss = property_get(e, "gloss");
  let explain = property_get(e, "explain");
  let r = list_join_space([word, "::", gloss, "::", explain]);
  return r;
}
