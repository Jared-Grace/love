import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { gloss_chapter_entries_collect_generic } from "./gloss_chapter_entries_collect_generic.mjs";
import { gloss_entries_words_dash_kept } from "./gloss_entries_words_dash_kept.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { lists_combine_unique } from "./lists_combine_unique.mjs";
export async function gloss_chapters_words_dash_kept_distinct(fn) {
  "Every different word a whole gloss store explains, each counted once, with a dash inside a word left where it is.";
  "The reading beside this one cuts at every dash, which is right for a store of English and wrong for a store of Cebuano: it turns each word the language writes with a dash into pieces, so the word the store actually explains is nowhere in its own list of words and pieces nobody wrote stand there instead. That list is what an outside dictionary is asked about and what the queue of words still owed an explanation is built from, so the pieces are asked about and the words are not.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written.";
  "$plain fn";
  "the function names a gloss store and is looked up for its own name only; nothing here calls it.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let words = await gloss_chapter_entries_collect_generic(
      chapter_code,
      fn,
      gloss_entries_words_dash_kept,
    );
    return words;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  let distinct = lists_combine_unique(chapters);
  return distinct;
}
