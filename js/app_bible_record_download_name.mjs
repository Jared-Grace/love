import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_project } from "./app_bible_record_project.mjs";
import { list_join_dash } from "./list_join_dash.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_bible_record_download_name(chapter_code, verse_numbers) {
  "$plain chapter_code";
  "The name a downloaded passage video is saved under: the project, the chapter and the verses, so a folder of them sorts by chapter and each says which reading it holds. Dashes, not the commas storage uses, because a comma in a file name trips some programs a file is later opened in.";
  arguments_assert(arguments, 2);
  let project = app_bible_record_project();
  let verses = list_join_dash(verse_numbers);
  let name = text_combine_multiple([
    project,
    "_",
    chapter_code,
    "_",
    verses,
    ".mp4",
  ]);
  return name;
}
