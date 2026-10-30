import { gloss_write_file_path } from "./gloss_write_file_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_passages_verses_key_find } from "./gloss_passages_verses_key_find.mjs";
import { gloss_passage_entries_words_misaligned } from "./gloss_passage_entries_words_misaligned.mjs";
import { null_is } from "./null_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function gloss_write_file_misaligned_assert_generic(
  chapter_code,
  verse_key,
  passages_read,
  fn,
  words_read,
) {
  "Refuse a passage's hand-off file whose word explanations do not line up with the passage's words, before anything is stored.";
  "$plain chapter_code";
  "$plain verse_key";
  "both name text to read: a chapter of the Bible, and the verses a passage of it covers. Neither names anything that runs.";
  "Storing used to take any number of explanations, so a passage with one word left out was stored, uploaded and only caught by the gate at the end of the chapter. Measured 2026-10-27: a passage short one explanation was stored without a word of complaint, and every explanation after the gap stood under the wrong word.";
  "Only a store that compares its words exactly can ask this before storing. The original-language store receives its letters in a spelling it mends after storing, so asking it first would refuse every passage it is given.";
  let path = gloss_write_file_path(chapter_code, verse_key, fn);
  let entries = await file_read_json(path);
  let passages = await passages_read(chapter_code);
  let passage = gloss_passages_verses_key_find(passages, verse_key);
  let difference = gloss_passage_entries_words_misaligned(
    passage,
    entries,
    words_read,
  );
  let aligned = null_is(difference);
  assert_json(aligned, {
    path,
    hint: "the explanations in this file must cover the passage's words one by one, in the order the passage writes them - nothing was stored",
    difference,
  });
}
