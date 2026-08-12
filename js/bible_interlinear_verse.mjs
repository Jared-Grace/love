import { fn_name } from "./fn_name.mjs";
import { bible_interlinear_verse_rows } from "./bible_interlinear_verse_rows.mjs";
import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { not_equal } from "./not_equal.mjs";
('Given a readable verse reference (e.g. "1 John 3:4"), return its ordered');
("interlinear words, each { original, translit, parsing, parsing_long, gloss, strong }.");
("The finding and ordering of the rows lives in ",
  fn_name("bible_interlinear_verse_rows"),
  "; this one");
("only narrows each row to the fields a gloss author needs, and drops the words that");
("carry no original-language text at all.");
export async function bible_interlinear_verse(reference) {
  let rows = await bible_interlinear_verse_rows(reference);
  function original_present_is(w) {
    let neq = not_equal(w.original, "");
    return neq;
  }
  let parts = rows.map(bible_interlinear_word_parts);
  let r = parts.filter(original_present_is);
  return r;
}
