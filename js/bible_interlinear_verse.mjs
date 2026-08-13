import { fn_name } from "./fn_name.mjs";
import { not } from "./not.mjs";
import { bible_interlinear_original_keys_find } from "./bible_interlinear_original_keys_find.mjs";
import { bible_interlinear_verse_rows } from "./bible_interlinear_verse_rows.mjs";
import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { bible_interlinear_words_base } from "./bible_interlinear_words_base.mjs";
import { not_equal } from "./not_equal.mjs";
('Given a readable verse reference (e.g. "1 John 3:4"), return its ordered');
("interlinear words, each { original, translit, parsing, parsing_long, gloss, strong }.");
("Only the words of the public-domain base text come back. The tables carry the base with");
("a handful of later editions merged into it, marked; the marked words are dropped here,");
("so what this returns is the base text alone rather than a merge of several editions.");
("The finding and ordering of the rows lives in ",
  fn_name("bible_interlinear_verse_rows"),
  "; reach for");
("that one when the question is what the source says rather than what is safe to publish.");
export async function bible_interlinear_verse(reference) {
  let rows = await bible_interlinear_verse_rows(reference);
  if (not(rows.length)) {
    let empty = [];
    return empty;
  }
  let keys = bible_interlinear_original_keys_find(rows);
  let marked_key = keys.marked;
  let base = bible_interlinear_words_base(rows, marked_key);
  function parts_of(row) {
    let row_parts = bible_interlinear_word_parts(row, marked_key);
    return row_parts;
  }
  function original_present_is(w) {
    let neq = not_equal(w.original, "");
    return neq;
  }
  let parts = base.map(parts_of);
  let r = parts.filter(original_present_is);
  return r;
}
