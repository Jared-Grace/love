import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { bible_interlinear_original_key } from "./bible_interlinear_original_key.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_exists } from "./property_exists.mjs";
"Every chapter's verses, each carrying its ORDERED PER-WORD interlinear records rather than";
"one joined string. This is what a gloss author reads: the word, its transliteration, its";
"parsing spelled out in English, and its Strong's number are all given, so none of them has";
"to be generated. See notes/gloss_method.md.";
"Rows with no original-language word are dropped - the tables carry English-side rows for";
"words the translation supplies, and those have nothing to gloss.";
export async function bible_interlinear_chapters_words() {
  let original_key = bible_interlinear_original_key();
  function verse_parts(verse_words) {
    function word_has_original(row) {
      let exists = property_exists(row, original_key);
      return exists;
    }
    let rows = list_filter(verse_words, word_has_original);
    let words = list_map(rows, bible_interlinear_word_parts);
    let r = {
      words,
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  return chapters;
}
