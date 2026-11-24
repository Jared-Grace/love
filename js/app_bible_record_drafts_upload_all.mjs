import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_database_open } from "./indexeddb_database_open.mjs";
import { indexeddb_get_all_backend } from "./indexeddb_get_all_backend.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_bible_record_draft_path_of } from "./app_bible_record_draft_path_of.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function app_bible_record_drafts_upload_all() {
  "Backs up every take kept on this phone and not sent yet - every project, every chapter - to storage as a draft (human 2026-11-25: a sync button for all videos, not just the current chapter), and answers {backed_up, failed} counts. Each draft goes beside where its take would go once sent, read off the key it is kept under, so a take from another project lands in that project and not the one chosen now. The caller signs in first.";
  arguments_assert(arguments, 0);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  async function open() {
    let db = await indexeddb_database_open(name, store);
    return db;
  }
  let records = await indexeddb_get_all_backend(open, store);
  let backed_up = 0;
  let failed = 0;
  let kept_ending = ".take";
  for (let record of records) {
    let key = property_get(record, "key");
    let b = text_ends_with(key, kept_ending);
    if (not(b)) {
      continue;
    }
    let taken = property_get(record, "value");
    let mp = text_includes(taken.type, "mp4");
    let extension = mp ? "mp4" : "webm";
    let difference = subtract(key.length, kept_ending.length);
    let bare = key.slice(0, difference);
    let sent_path = text_combine_multiple([bare, ".", extension]);
    let path = app_bible_record_draft_path_of(sent_path);
    async function upload() {
      await firebase_upload_blob_browser_quiet(path, taken);
      return true;
    }
    let done = await catch_null_async(upload);
    if (null_not_is(done)) {
      backed_up += 1;
    } else {
      failed += 1;
    }
  }
  let r = {
    backed_up,
    failed,
  };
  return r;
}
