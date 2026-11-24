import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_sent_key } from "./app_bible_record_take_sent_key.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_key_put } from "./indexeddb_key_put.mjs";
export async function app_bible_record_take_sent_keep(
  chapter_code,
  verse_numbers,
  taken,
) {
  "$plain chapter_code";
  "Keeps a copy on the phone of a take already sent, so opening its chapter again does not download it (human 2026-11-24: the sent verse 1 video took time to load).";
  arguments_assert(arguments, 3);
  let key = app_bible_record_take_sent_key(chapter_code, verse_numbers);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  await indexeddb_key_put(name, store, key, taken);
}
