import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
export async function gloss_chapters_glosses_empty(fn) {
  "Every chapter in one gloss store carrying a word explanation whose meaning is blank, the words it left blank, and how many chapters were read to find them.";
  "★ A BLANK MEANING IS THE ONE FAULT THE ALIGNMENT GATE CANNOT SEE. That gate counts explanations against the passage's words, and a blank one still counts, so a store can line up perfectly and still hand the reader a row with nothing in the middle of it. The page paints each row as the word, then what it means, then why - so a blank meaning reads as two colons with a hole between them, on the one line the reader came for.";
  "The words left blank travel out beside the count, because they are what says whether an author had a habit or slipped once: the same little English word blank across a whole chapter is a rule somebody was following, and a scatter of different ones is a run of separate misses.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  "How many were read travels out beside what was found, because the two together are what tells a clean store apart from a sweep that has stopped reaching one - these stores sit on a drive that is not always mounted.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    let words = [];
    let entries_size = 0;
    function passage_each(passage) {
      let entries = gloss_passage_entries(passage);
      function entry_each(entry) {
        entries_size = entries_size + 1;
        let gloss = property_get(entry, "gloss");
        let trimmed = text_trim(gloss);
        let blank = text_empty_is(trimmed);
        if (blank) {
          let word = property_get(entry, "word");
          list_add(words, word);
        }
      }
      each(entries, entry_each);
    }
    each(passages, passage_each);
    let r = {
      chapter_code,
      entries: entries_size,
      empty: list_size(words),
      words,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function empty_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "words");
    return offending;
  }
  let offenders = list_filter(chapters, empty_is);
  let r2 = {
    chapters: list_size(chapters),
    offenders,
  };
  return r2;
}
