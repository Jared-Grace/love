import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { gloss_chapter_words_misaligned } from "./gloss_chapter_words_misaligned.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
export async function gloss_chapters_words_misaligned(fn, words_read) {
  "Every chapter in one gloss store carrying a passage whose word explanations have stopped lining up with the passage itself.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
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
  return offenders;
}
