import { property_greater_than } from "./property_greater_than.mjs";
import { bible_sentence_end_marks_path } from "./bible_sentence_end_marks_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_folder_chapter_end_blocked_measure } from "./bible_folder_chapter_end_blocked_measure.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_folders_end_blocked_measure() {
  "Reads every bible the sentence-end record says has verses it could not recognise, and answers the ones whose sentence mark was only hidden behind a closing mark nobody here takes off.";
  "WHICH BIBLES TO ASK IS READ OFF THE RECORD RATHER THAN CHOSEN, and so is the chapter to ask each of them for. The record already knows which chapter each bible actually answered with, and a bible that answered for all sixteen of its verses has nothing here to find - so the set is derived from what was measured instead of from somebody deciding which bibles looked suspicious.";
  "This reaches the network, so it is run by hand. It writes nothing; what it finds is a short list of marks to add to what a verse has taken off before it is asked whether it finished a sentence.";
  let path = bible_sentence_end_marks_path();
  let rows = await file_read_json(path);
  function bible_folders_end_blocked_unended_is(row) {
    let read = property_get(row, "read");
    let ended = property_get(row, "ended");
    let some = greater_than(read, ended);
    return some;
  }
  let unended = list_filter(rows, bible_folders_end_blocked_unended_is);
  async function bible_folders_end_blocked_one(row) {
    let bible_folder = property_get(row, "bible_folder");
    let chapter_code = property_get(row, "chapter_code");
    let one = await bible_folder_chapter_end_blocked_measure(
      bible_folder,
      chapter_code,
    );
    return one;
  }
  let measured = await list_map_unordered_async(
    unended,
    bible_folders_end_blocked_one,
  );
  function bible_folders_end_blocked_any_is(one) {
    let any = property_greater_than(one, "blocked", 0);
    return any;
  }
  let found = list_filter(measured, bible_folders_end_blocked_any_is);
  let answer = {
    asked: list_size(unended),
    found,
  };
  return answer;
}
