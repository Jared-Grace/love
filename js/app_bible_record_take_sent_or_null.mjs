import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { not } from "./not.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_clip_path_extension } from "./app_bible_record_clip_path_extension.mjs";
import { firebase_download_blob_browser_or_null } from "./firebase_download_blob_browser_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
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
      return blob;
    }
  }
  return null;
}
