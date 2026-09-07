import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_word_glosses(fn, word) {
  "$plain word";
  "Every meaning one gloss store has given a single English word, tallied by how often each was used.";
  "★ THIS IS HOW A CONVENTION IS READ OFF THE STORE RATHER THAN DECLARED OVER IT. A store written by several hands over months already answers what it calls a word; asking it is a reading, while deciding afresh is a second opinion that then has to be reconciled with everything already written. An author about to gloss a word the store has met before should ask here first.";
  "The tally is the point rather than the list of meanings. One meaning used two hundred times and a second used once is a settled convention with a slip in it, and two used a hundred times each is a split the store has never resolved - and those two look identical if the meanings are only listed.";
  "The word is matched in small letters, because a capital belongs to the sentence rather than to the word, and the same word opening a verse and sitting inside one is one word.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let wanted = text_lower_to(word);
  let glosses = [];
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_each(passage) {
      let entries = gloss_passage_entries(passage);
      function entry_each(entry) {
        let spelling = property_get(entry, "word");
        let lower = text_lower_to(spelling);
        let same = equal(lower, wanted);
        if (same) {
          let gloss = property_get(entry, "gloss");
          list_add(glosses, gloss);
        }
      }
      each(entries, entry_each);
    }
    each(passages, passage_each);
  }
  await list_map_async(chapter_codes, chapter_read);
  let tally = list_tally_ranked(glosses);
  let r = {
    chapters: list_size(chapter_codes),
    used: list_size(glosses),
    tally,
  };
  return r;
}
