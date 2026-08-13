import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_words_distinct } from "./gloss_chapter_words_distinct.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { each } from "./each.mjs";
export async function gloss_chapters_words_distinct(fn) {
  "Every different word a whole gloss store explains anywhere in it, each counted once.";
  "This is what says how much asking an outside dictionary about the store would cost, before any of it is asked - the store holds a word once for every time it is explained, and the same handful of small words carry most of that weight, so the number of things to look up is far smaller than the number of explanations and the difference is worth knowing first.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_words_distinct(chapter_code, fn);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  let words = [];
  function chapter_add(chapter) {
    list_add_multiple(words, chapter);
  }
  each(chapters, chapter_add);
  let distinct = list_unique(words);
  return distinct;
}
