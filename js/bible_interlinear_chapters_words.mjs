import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_map_filter } from "./list_map_filter.mjs";
import { bible_interlinear_rows_english_text } from "./bible_interlinear_rows_english_text.mjs";
import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
export async function bible_interlinear_chapters_words() {
  function verse_parts(verse_words) {
    let keys = bible_interlinear_original_keys_find(verse_words);
    let marked_key = keys.marked;
    let base = bible_interlinear_words_base(verse_words, marked_key);
    function parts_of(row) {
      let parts = bible_interlinear_word_parts(row, marked_key);
      return parts;
    }
    function original_present_is(word) {
      let neq = not_equal(word.original, "");
      return neq;
    }
    let words = list_map_filter(base, parts_of, original_present_is);
    let english = bible_interlinear_rows_english_text(verse_words);
    let r = {
      words,
      english,
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  return chapters;
}
