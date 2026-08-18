import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_words_misaligned } from "./gloss_chapter_words_misaligned.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function gloss_chapters_words_misaligned(fn, words_read) {
  "Every chapter in one gloss store carrying a passage whose word explanations have stopped lining up with the passage itself, and how many chapters were read to find them.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  "How many were read travels out beside what was found, because the two together are what tells a clean store apart from a sweep that has stopped reaching one. Both answer with no offenders, and the number of chapters read is the only part of the answer that falls when the store moves or the folder is not mounted.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_words_misaligned(chapter_code, fn, words_read);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function misaligned_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "misaligned");
    return offending;
  }
  let offenders = list_filter(chapters, misaligned_is);
  let r2 = {
    chapters: list_size(chapters),
    offenders,
  };
  return r2;
}
