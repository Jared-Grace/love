import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_passage_entries } from "./app_original_bible_gloss_passage_entries.mjs";
import { each_async } from "./each_async.mjs";
import { file_delete } from "./file_delete.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { gloss_entries_explains_standing_is } from "./gloss_entries_explains_standing_is.mjs";
import { gloss_explains_write_file_path } from "./gloss_explains_write_file_path.mjs";
import { gloss_explains_write_files_named } from "./gloss_explains_write_files_named.mjs";
import { list_add } from "./list_add.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_original_bible_gloss_explains_write_files_spent_delete() {
  "Clear away every piece of waiting wording for the original-language gloss that its passage already says word for word, and answer with what was cleared and what is still waiting.";
  "Writing a chapter's waiting wording into it never removed the files it came out of, so the folder keeps every hand-off ever made and each one is written again on the next mending of that chapter. A passage improved since then is quietly returned to the older sentence, and nothing on the page says so - the chapter reports the same passages mended either way.";
  "It finds its own work, so it takes nothing and can be run at any time. A file is removed only where writing it would change not one character, which is what makes the removal lose nothing: the wording it carried is already in the store, in the same standings, spelled the same way.";
  "A passage nobody has authored yet keeps its file, because there is nothing to compare it against and the wording is the only copy there is. So is a passage that has moved on, which is the file that had to be found.";
  let fn = app_original_bible_gloss_generate;
  let named = await gloss_explains_write_files_named(fn);
  let deleted = [];
  let waiting = [];
  async function named_read(pair) {
    let chapter_code = property_get(pair, "chapter_code");
    let verse_key = property_get(pair, "verse_key");
    let said = chapter_code + " " + verse_key;
    let entries = await app_original_bible_gloss_passage_entries(
      chapter_code,
      verse_key,
    );
    if (null_is(entries)) {
      list_add(waiting, said);
      return;
    }
    let path = gloss_explains_write_file_path(chapter_code, verse_key, fn);
    let explains = await file_read_json(path);
    let spent = gloss_entries_explains_standing_is(entries, explains);
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
