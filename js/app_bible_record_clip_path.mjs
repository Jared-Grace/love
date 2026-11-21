import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_bible_record_clip_path(chapter_code, verse_numbers, blob) {
  "$plain chapter_code";
  "Where one recorded passage is kept: a folder per chapter, the file named by the passage's verse numbers joined with commas - the same key the passage pictures are filed under - so the chapter builder can match each clip to its passage and its picture.";
  "The ending follows what the phone actually recorded, because a browser that cannot write MP4 writes WebM, and a file named for the wrong kind confuses whatever opens it next.";
  arguments_assert(arguments, 3);
  let mp = text_includes(blob.type, "mp4");
  let extension = mp ? "mp4" : "webm";
  let name = list_join_comma(verse_numbers);
  let path = text_combine_multiple([
    "bible_record/",
    chapter_code,
    "/",
    name,
    ".",
    extension,
  ]);
  return path;
}
