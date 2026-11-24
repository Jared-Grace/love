import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { not } from "./not.mjs";
import { app_bible_record_take_sent_key } from "./app_bible_record_take_sent_key.mjs";
import { app_bible_record_takes_indexeddb_name } from "./app_bible_record_takes_indexeddb_name.mjs";
import { app_bible_record_takes_indexeddb_store } from "./app_bible_record_takes_indexeddb_store.mjs";
import { indexeddb_key_get_or_null } from "./indexeddb_key_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_clip_path_extension } from "./app_bible_record_clip_path_extension.mjs";
import { firebase_download_blob_browser_or_null } from "./firebase_download_blob_browser_or_null.mjs";
import { app_bible_record_take_sent_keep } from "./app_bible_record_take_sent_keep.mjs";
export async function app_bible_record_take_sent_or_null(
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "The take already sent for this passage in the current project, or null. Only looked for when the owner is already signed in: opening a passage must never ask anyone to sign in, and nobody else may read the takes. Either kind of file is looked for, because the phone decides which it writes (human 2026-11-23: a sent take was gone on coming back to its passage).";
  arguments_assert(arguments, 2);
  let project = app_bible_record_project();
  if (not(project)) {
    return null;
  }
  ("THE PHONE'S OWN COPY IS LOOKED FOR FIRST (human 2026-11-24: the sent verse 1 video took time to load - it was downloaded whole every time the chapter opened). A copy downloaded once is kept, so only the first look on a phone downloads. REJECTED: asking storage each time whether its copy changed - one more trip over the network for something only this owner writes.");
  let key = app_bible_record_take_sent_key(chapter_code, verse_numbers);
  let name = app_bible_record_takes_indexeddb_name();
  let store = app_bible_record_takes_indexeddb_store();
  let record = await indexeddb_key_get_or_null(name, store, key);
  if (null_not_is(record)) {
    let taken = property_get(record, "value");
    return taken;
  }
  let user = await firebase_auth_user_or_null();
  if (null_is(user)) {
    return null;
  }
  for (let extension of ["mp4", "webm"]) {
    let path = app_bible_record_clip_path_extension(
      chapter_code,
      verse_numbers,
      extension,
    );
    let blob = await firebase_download_blob_browser_or_null(path);
    if (null_not_is(blob)) {
      await app_bible_record_take_sent_keep(chapter_code, verse_numbers, blob);
      return blob;
    }
  }
  return null;
}
