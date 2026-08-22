import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_words } from "./text_words.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
export function bible_glyph_chapters_undrawn_artwork_words(gloss) {
  arguments_assert(arguments, 1);
  ("the words of a wording worth searching the artwork set for.");
  ("THE SHORT ONES ARE DROPPED because they are the grammar the interlinear wrapped the word in - of, the, in, his - and every one of them appears inside some name the set holds, so leaving them in matches the whole set for every candidate and says nothing.");
  let lowered = text_lower_to(gloss);
  let all = text_words(lowered);
  let kept = [];
  for (let word of all) {
    let short = less_than(word.length, 4);
    if (short) {
      continue;
    }
    list_add(kept, word);
  }
  return kept;
}
