import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
("Every chapter's verses, each carrying its ORDERED PER-WORD interlinear records rather than");
("one joined string. This is what a gloss author reads: the word, its transliteration, its");
("parsing spelled out in English, and its Strong's number are all given, so none of them has");
("to be generated. See notes/gloss_method.md.");
("Only the public-domain base text comes back; words belonging to a later edition are");
("dropped by ",
  fn_name("bible_interlinear_words_base"),
  " before any of them is reduced to a record.");
("Rows with no original-language word are dropped after reduction rather than before - the");
("tables carry English-side rows for words the translation supplies, and those have nothing");
("to gloss, but whether a row has a word is a question about its text and not about whether");
("the column is present, and the blank filler rows have the column and no word in it.");
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
    let reduced = list_map(base, parts_of);
    let words = list_filter(reduced, original_present_is);
    let r = {
      words,
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  return chapters;
}
