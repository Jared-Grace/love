import { bible_interlinear_word_parts } from "./bible_interlinear_word_parts.mjs";
import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
('Given a readable verse reference (e.g. "1 John 3:4"), return its ordered');
("interlinear words, each { original, translit, parsing, parsing_long, gloss, strong }.");
('The readable "VerseId" is only stamped on the FIRST word of a verse; the rest share');
('the numeric "Verse" id — so find the id from the first word, then gather all words.');
("Uses plain bracket access because these external rows have optional fields (an");
("asserting ",
  fn_name("property_get"),
  ' would throw on the many rows that omit "VerseId").');
export async function bible_interlinear_verse(reference) {
  let file_path = bible_interlinear_json_path();
  let words = await file_read_json(file_path);
  function lambda(x) {
    let eq = equal(x["VerseId"], reference);
    return eq;
  }
  let first = words.find(lambda);
  if (not(first)) {
    let r = [];
    return r;
  }
  let verse_id = first["Verse"];
  let sort_key = equal(first["Language"], "Hebrew") ? "Heb Sort" : "Greek Sort";
  function lambda2(x) {
    let eq2 = equal(x["Verse"], verse_id);
    return eq2;
  }
  let verse_words = words.filter(lambda2);
  function lambda3(a, b) {
    let difference = subtract(a[sort_key], b[sort_key]);
    return difference;
  }
  verse_words = verse_words.slice().sort(lambda3);
  let lambda4 = bible_interlinear_word_parts;
  function lambda5(w) {
    let neq = not_equal(w.original, "");
    return neq;
  }
  let r3 = verse_words.map(lambda4).filter(lambda5);
  return r3;
}
