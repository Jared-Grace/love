import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_kept_key } from "./app_bible_record_take_kept_key.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_key_delete } from "./indexeddb_key_delete.mjs";
export async function app_bible_record_take_kept_delete(
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "Forgets the unsent take kept on the phone for this passage in the current project - once it is sent, or deleted.";
  arguments_assert(arguments, 2);
  let key = app_bible_record_take_kept_key(chapter_code, verse_numbers);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  await indexeddb_key_delete(name, store, key);
}
