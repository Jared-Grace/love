import { text_split } from "./text_split.mjs";
import { bible_glyph_gloss_placeholder_is } from "./bible_glyph_gloss_placeholder_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function bible_gloss_placeholder_words_dropped(gloss) {
  "$plain gloss";
  "the wording is one the interlinear printed under a word. It is text to look at and nothing that runs.";
  "One wording with any word of it that is the interlinear's own filler notation taken out, so a filler sharing a row with real English stops being printed as if it were scripture.";
  "THE FILLER IS USUALLY THE WHOLE ROW AND ONCE IT IS NOT. Across the whole table vvv stands alone as a row four thousand eight hundred and forty-nine times, and a reading that matches the whole wording already drops those. Genesis thirty-five verse eighteen is the exception: its row reads vvv him, so the whole wording is not a filler, the row was kept, and the band read she named vvv him Ben-oni.";
  "IT ASKS THE SHARED READING WORD BY WORD RATHER THAN NAMING THE MARK. The dash and the dots are already taken out by the pass that drops a word with no letter in it, so vvv is the only filler this changes today; but asking the one reading means a filler learned later is dropped here by the same line.";
  "THE SPACE THE WORD LEAVES IS CLOSED UP, for the same reason as next door: two spaces in a band are the same hole the mark was, only invisible.";
  let words = text_split(gloss, " ");
  let kept = [];
  for (let word of words) {
    let filler = bible_glyph_gloss_placeholder_is(word);
    if (filler) {
      continue;
    }
    list_add(kept, word);
  }
  let text = list_join_space(kept);
  return text;
}
