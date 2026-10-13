import { arguments_assert } from "./arguments_assert.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_chapter_group_path(folder_code, chapter_code) {
  "$plain folder_code";
  "$plain chapter_code";
  "Where storage keeps how one chapter is divided into groups, for one folder: every folder has a directory of its own, and each chapter one file in it, so two people given the same folder code divide the same chapter together and two folders never touch.";
  "The directory is spelled here and nowhere else, because files are already kept under it - changing the word would leave every one of them where nothing looks.";
  arguments_assert(arguments, 2);
  let directory = text_frozen("chapter_group");
  let path = text_combine_multiple([
    directory,
    "/",
    folder_code,
    "/",
    chapter_code,
    ".json",
  ]);
  return path;
}
