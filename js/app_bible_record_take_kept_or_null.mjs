import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { not } from "./not.mjs";
import { app_bible_record_take_kept_key } from "./app_bible_record_take_kept_key.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_key_get_or_null } from "./indexeddb_key_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function app_bible_record_take_kept_or_null(
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "The unsent take kept on the phone for this passage in the current project, or null. Null with no project chosen, because a take is only ever kept under one.";
  arguments_assert(arguments, 2);
  let project = app_bible_record_project();
  if (not(project)) {
    return null;
  }
  let key = app_bible_record_take_kept_key(chapter_code, verse_numbers);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  let record = await indexeddb_key_get_or_null(name, store, key);
  if (null_is(record)) {
    return null;
  }
  let taken = property_get(record, "value");
  return taken;
}
