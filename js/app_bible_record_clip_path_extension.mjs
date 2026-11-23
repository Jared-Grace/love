import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_bible_record_clip_path_extension(
  chapter_code,
  verse_numbers,
  extension,
) {
  "$plain chapter_code";
  "$plain extension";
  "Where one recorded passage is kept, given the kind of file it is (mp4 or webm): a folder per project, then per chapter, the file named by the passage's verse numbers joined with commas. Given the kind rather than the file, so a page can look for a take it does not have yet.";
  arguments_assert(arguments, 3);
  let project = app_bible_record_project();
  let name = list_join_comma(verse_numbers);
  let path = text_combine_multiple([
    "bible_record/",
    project,
    "/",
    chapter_code,
    "/",
    name,
    ".",
    extension,
  ]);
  return path;
}
