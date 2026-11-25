import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_kept_key } from "./app_bible_record_take_kept_key.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_key_put } from "./indexeddb_key_put.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { app_bible_record_draft_upload } from "./app_bible_record_draft_upload.mjs";
export async function app_bible_record_take_keep(
  chapter_code,
  verse_numbers,
  taken,
) {
  "$plain chapter_code";
  "Keeps a take that is not sent yet on the phone, so closing the app does not lose it (human 2026-11-24: restarting the app made the video disappear). It stays until it is sent or deleted.";
  arguments_assert(arguments, 3);
  let key = app_bible_record_take_kept_key(chapter_code, verse_numbers);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  await indexeddb_key_put(name, store, key, taken);
  ("IT IS BACKED UP TO STORAGE TOO, as a draft, when the owner is signed in (human 2026-11-25: syncing, so every video reaches storage) - the phone's copy alone is lost with the phone.");
  ("NOT IN THE STORE BUILD, which keeps every take on the phone alone (human 2026-11-25: no send or sync).");
  if (app_bible_record_local_is()) {
    return;
  }
  await app_bible_record_draft_upload(chapter_code, verse_numbers, taken);
}
