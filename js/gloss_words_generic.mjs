import { arguments_assert } from "./arguments_assert.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_words_generic(fn) {
  "Every different word one gloss store has explained, said once each and in small letters, together with how many explanations had to be read to find them.";
  "★ THIS IS THE SIZE OF ANY JOB PAID PER WORD RATHER THAN PER EXPLANATION, AND THE TWO NUMBERS ARE FAR APART. Explaining is paid once for every word of every verse, so it grows with each chapter and never stops. Saying a word aloud, or writing how it is said, is paid once for the word itself however many times it appears - and a chapter written next month is mostly words this list already holds. Measured on the Urdu store the day this was written: nineteen and a half thousand explanations, sixteen hundred different words. Anything read off the count of explanations overstates that work by about twelve times.";
  "★ SMALL LETTERS, BECAUSE A CAPITAL IS THE SENTENCE'S AND NOT THE WORD'S. The same word opening a verse and sitting inside one is one word and one sound, and keeping both spellings would record it twice and let a page miss it by asking with the wrong one. A page asking for a word here lowers it first, which is the one step this shape costs and the reason it costs nothing else.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is counted from the moment it is written and there is no list anywhere to keep in line.";
  arguments_assert(arguments, 1);
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let words = [];
  async function chapter_each(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_each(passage) {
      let entries = gloss_passage_entries(passage);
      function entry_each(entry) {
        let word = property_get(entry, "word");
        let lower = text_lower_to(word);
        list_add(words, lower);
      }
      each(entries, entry_each);
    }
    each(passages, passage_each);
  }
  await list_map_async(chapter_codes, chapter_each);
  let unique = list_unique(words);
  list_sort_text(unique);
  let r = {
    chapters: list_size(chapter_codes),
    entries: list_size(words),
    distinct: list_size(unique),
    words: unique,
  };
  return r;
}
