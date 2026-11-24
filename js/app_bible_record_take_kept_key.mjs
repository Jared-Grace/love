import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_clip_path_extension } from "./app_bible_record_clip_path_extension.mjs";
export function app_bible_record_take_kept_key(chapter_code, verse_numbers) {
  "$plain chapter_code";
  "What an unsent take is kept on the phone under: its project, chapter and verses, so each project keeps its own set and a new take of the same passage in the same project replaces the old one (human 2026-11-24: re-recording a passage in a project overwrites; each project is its own set of videos).";
  arguments_assert(arguments, 2);
  let key = app_bible_record_clip_path_extension(
    chapter_code,
    verse_numbers,
    "take",
  );
  return key;
}
