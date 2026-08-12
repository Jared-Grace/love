import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { bible_interlinear_chapters_generic } from "./bible_interlinear_chapters_generic.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_verses_upload_folder } from "./bible_interlinear_verses_upload_folder.mjs";
import { bible_interlinear_word_base_text } from "./bible_interlinear_word_base_text.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
("Every chapter's verses, each carrying its original-language text as one joined string.");
("The per-word columns - transliteration, parsing, Strong's number, gloss - are dropped here.");
("Reach for ",
  fn_name("bible_interlinear_chapters_words"),
  " when you want them; this one is for callers that");
("just need the text to show or to hand to a reader.");
("This is the text that gets published as a Bible version, so it is the base text alone:");
("the words the tables mark as belonging to a later edition are dropped, not merged in.");
export async function bible_interlinear_chapters() {
  bible_interlinear_verses_upload_folder();
  function verse_parts(verse_words) {
    let keys = bible_interlinear_original_keys_find(verse_words);
    let marked_key = keys.marked;
    let base = bible_interlinear_words_base(verse_words, marked_key);
    function word_of(row) {
      let value = row[marked_key];
      let missing = equal(value, undefined) || equal(value, null);
      let marked = missing ? "" : String(value);
      let word = bible_interlinear_word_base_text(marked);
      return word;
    }
    function word_present_is(word) {
      let neq = not_equal(word, "");
      return neq;
    }
    let mapped = list_map(base, word_of);
    let present = list_filter(mapped, word_present_is);
    let text = list_join_space(present);
    let r = {
      text,
    };
    return r;
  }
  let chapters = await bible_interlinear_chapters_generic(verse_parts);
  return chapters;
}
