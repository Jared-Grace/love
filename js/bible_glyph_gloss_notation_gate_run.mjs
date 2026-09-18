import { object_property_names } from "./object_property_names.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { bible_glyph_gloss_supplied_dropped } from "./bible_glyph_gloss_supplied_dropped.mjs";
import { list_add } from "./list_add.mjs";
import { assert_json } from "./assert_json.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_gloss_notation_gate_run() {
  "Checks that no chunk of interlinear English still carries a bracket, a brace or a page tag once the cleaner has been over it, so nothing a reader cannot pronounce can reach the picture Bible's English band.";
  "THE CLEANER WAS PROVED AGAINST ONE DAY'S TABLE AND THAT IS NOT THE SAME AS BEING RIGHT. It was written by reading what the marks do in the tables as they stand, and it was checked by running it over all of them; both of those are facts about a file that a later download replaces. A table rebuilt from the same typeset page can carry a tag class nobody has met, a mark nobody has met, or a span opened with one mark and closed with another in a verse nobody has looked at. This gate is what turns that one measurement into a standing one.";
  "IT ASKS THE REAL FUNCTION AND NEVER A COPY OF ITS RULE. A gate that spelled out the same regular expression would agree with the cleaner by construction and would go on agreeing after somebody narrowed the cleaner, which is the one failure it exists to catch. So it calls the cleaner and looks only at what comes back.";
  "IT REPORTS THE CHUNK AS WELL AS THE ANSWER. A leftover mark is nearly always a shape in the source rather than a slip in the cleaner - the fifteen chunks that open with a brace and close with a square bracket were exactly that - so the reading a person needs first is the English that went in, not the English that came out.";
  "IT NEEDS NO NETWORK. The tables are on this machine, and the question is about what this repo does to them.";
  "A CHUNK EMPTIED OF EVERY WORD IS THE OTHER FAULT AND IS COUNTED TOO. Taking the marks out must never take the words out: a chunk that is supplied all the way through still has an original word under it, and returning nothing for it would delete that word from the verse in silence. Zero marks left with a handful of chunks emptied would be a cleaner that had become a deleter.";
  let chapters = await bible_interlinear_chapters_words_cache();
  let marked = [];
  let emptied = [];
  let chunks = 0;
  for (let chapter_code of object_property_names(chapters)) {
    for (let verse of chapters[chapter_code]) {
      for (let word of verse.words) {
        let gloss = word.gloss;
        let missing = equal(gloss, undefined) || equal(gloss, null);
        if (missing) {
          continue;
        }
        chunks = chunks + 1;
        let said = bible_glyph_gloss_supplied_dropped(gloss);
        let notation = /[\[\]{}<>]/.test(said);
        let at = chapter_code + ":" + verse.verse_number;
        if (notation) {
          list_add(marked, {
            at,
            gloss,
            said,
          });
        }
        let left = gloss.trim();
        let lost = not_equal(left, "") && equal(said, "");
        if (lost) {
          list_add(emptied, {
            at,
            gloss,
          });
        }
      }
    }
  }
  let b = list_empty_is(marked);
  assert_json(b, {
    marked,
    hint:
      "these English chunks still hold a bracket, a brace or a page tag after " +
      fn_name("bible_glyph_gloss_supplied_dropped") +
      " has been over them, so a reader of the picture Bible would meet a character nobody taught them - widen the cleaner to cover the shape, and write down in it why the shape is there",
  });
  let b2 = list_empty_is(emptied);
  assert_json(b2, {
    emptied,
    hint:
      "these English chunks came back with no words at all, so " +
      fn_name("bible_glyph_gloss_supplied_dropped") +
      " is deleting the word rather than the marks around it - the original word under the chunk would vanish from the verse with nothing on the page saying so",
  });
  let r = {
    chunks,
  };
  return r;
}
