import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_clip_path_extension } from "./app_bible_record_clip_path_extension.mjs";
export function app_bible_record_take_sent_key(chapter_code, verse_numbers) {
  "$plain chapter_code";
  "What a take already sent is kept on the phone under, beside the unsent one: its project, chapter and verses, so opening the chapter plays it at once instead of downloading it again (human 2026-11-24: the sent verse 1 video took time to load).";
  arguments_assert(arguments, 2);
  let key = app_bible_record_clip_path_extension(
    chapter_code,
    verse_numbers,
    "sent",
  );
  return key;
}
