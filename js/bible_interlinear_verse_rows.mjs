import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { bible_interlinear_json_path } from "./bible_interlinear_json_path.mjs";
('Given a readable verse reference (e.g. "1 John 3:4"), return its RAW interlinear');
("rows, in reading order, with every column of the source table left intact.");
('The readable "VerseId" is only stamped on the FIRST word of a verse; the rest share');
('the numeric "Verse" id - so find the id from the first word, then gather all words.');
("This is the auditing reader. ",
  fn_name("bible_interlinear_verse"),
  " narrows each row down to the");
("fields a gloss author needs and drops the rest; when the question is what the source");
("actually says - which edition a base text tracks, what an apparatus column marks,");
("whether a column carries somebody's editorial selection - you need the columns that");
("narrowing threw away, and reading them through the narrowing reader cannot answer it.");
export async function bible_interlinear_verse_rows(reference) {
  let file_path = bible_interlinear_json_path();
  let words = await file_read_json(file_path);
  function verse_id_is(x) {
    let eq = equal(x["VerseId"], reference);
    return eq;
  }
  let first = words.find(verse_id_is);
  if (not(first)) {
    let empty = [];
    return empty;
  }
  let verse_id = first["Verse"];
  let sort_key = equal(first["Language"], "Hebrew") ? "Heb Sort" : "Greek Sort";
  function verse_id_same_is(x) {
    let eq2 = equal(x["Verse"], verse_id);
    return eq2;
  }
  let verse_words = words.filter(verse_id_same_is);
  function sort_key_difference(a, b) {
    let difference = subtract(a[sort_key], b[sort_key]);
    return difference;
  }
  let sorted = verse_words.slice().sort(sort_key_difference);
  return sorted;
}
