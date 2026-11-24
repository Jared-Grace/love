import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_clip_path_extension } from "./app_bible_record_clip_path_extension.mjs";
import { firebase_delete_browser_if_exists } from "./firebase_delete_browser_if_exists.mjs";
export async function app_bible_record_take_delete(
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "Deletes the take sent for this passage in the current project (human 2026-11-24: there should be a delete video button). Both kinds of file are deleted, because the phone decides which kind it writes, and a second take of the other kind would otherwise come back on the next visit.";
  arguments_assert(arguments, 2);
  for (let extension of ["mp4", "webm"]) {
    let path = app_bible_record_clip_path_extension(
      chapter_code,
      verse_numbers,
      extension,
    );
    await firebase_delete_browser_if_exists(path);
  }
}
