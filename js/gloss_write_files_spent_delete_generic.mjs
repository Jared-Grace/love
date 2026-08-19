import { each_async } from "./each_async.mjs";
import { file_delete } from "./file_delete.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_entries_values_standing_is_generic } from "./gloss_entries_values_standing_is_generic.mjs";
import { gloss_write_file_path_generic } from "./gloss_write_file_path_generic.mjs";
import { gloss_write_files_named_generic } from "./gloss_write_files_named_generic.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_write_files_spent_delete_generic(
  fn,
  opening,
  entries_fn,
  key,
) {
  "Clear away every piece of waiting text for one named part of a gloss's word explanations that its passage already says word for word, and answer with what was cleared and what is still waiting.";
  "$plain key";
  "the key is the name of a part of a word explanation, like explain or gloss. It names a place to read and nothing that runs.";
  "$plain opening";
  "the opening is the word a hand-off file's name begins with, like explains_ or glosses_. It picks which files in the folder are being cleared and names no command.";
  "Writing a chapter's waiting text into it never removed the files it came out of, so the folder keeps every hand-off ever made and each one is written again on the next mending of that chapter. A passage improved since then is quietly returned to the older text, and nothing on the page says so - the chapter reports the same passages mended either way.";
  "It finds its own work, so it takes no chapter and can be run at any time. A file is removed only where writing it would change not one character, which is what makes the removal lose nothing: the text it carried is already in the store, in the same standings, spelled the same way.";
  "A passage nobody has authored yet keeps its file, because there is nothing to compare it against and the text is the only copy there is. So is a passage that has moved on, which is the file that had to be found.";
  "Which part is being cleared is handed in rather than settled here, because the two parts a reader meets are handed over in two families of file that share one folder, and every word of the reasoning above is true of both.";
  let named = await gloss_write_files_named_generic(fn, opening);
  let deleted = [];
  let waiting = [];
  async function named_read(pair) {
    let chapter_code = property_get(pair, "chapter_code");
    let verse_key = property_get(pair, "verse_key");
    let said = chapter_code + " " + verse_key;
    let entries = await entries_fn(chapter_code, verse_key);
    if (null_is(entries)) {
      list_add(waiting, said);
      return;
    }
    let path = gloss_write_file_path_generic(
      chapter_code,
      verse_key,
      fn,
      opening,
    );
    let values = await file_read_json(path);
    let spent = gloss_entries_values_standing_is_generic(entries, values, key);
    if (not(spent)) {
      list_add(waiting, said);
      return;
    }
    await file_delete(path);
    list_add(deleted, said);
  }
  await each_async(named, named_read);
  let r = {
    files: list_size(named),
    cleared: list_size(deleted),
    deleted,
    waiting,
  };
  return r;
}
