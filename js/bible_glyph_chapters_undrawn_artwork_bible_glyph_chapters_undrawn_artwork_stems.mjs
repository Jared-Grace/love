import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { less_than } from "./less_than.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function bible_glyph_chapters_undrawn_artwork_bible_glyph_chapters_undrawn_artwork_stems(
  word,
  name_word,
) {
  arguments_assert(arguments, 2);
  ("whether two words are the same word or one is the other's opening.");
  let shorter = word;
  let longer = name_word;
  let swap = greater_than(word.length, name_word.length);
  if (swap) {
    shorter = name_word;
    longer = word;
  }
  let too_short = less_than(shorter.length, 4);
  if (too_short) {
    let v = false;
    return v;
  }
  let v2 = text_starts_with(longer, shorter);
  return v2;
}
