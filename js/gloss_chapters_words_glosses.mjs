import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_tally_ranked } from "./list_tally_ranked.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_chapters_words_glosses(fn, words) {
  "Every meaning one gloss store has given each of several English words, tallied by how often each was used, from a single walk of the store.";
  "★ ONE WALK ANSWERS FOR THE WHOLE LIST. Asking a word at a time reads every chapter again for each word, so a list of a dozen words paid a dozen readings of the same files to learn twelve answers that were all sitting in the first one.";
  "An author filling a run of blanks needs the store's answer for every blanked word at once, and the run is what makes the convention visible: a word the store has answered one way two hundred times is settled, and one it has answered two ways is a split that a fill would otherwise freeze in whichever direction it happened to guess.";
  "The words are matched in small letters, because a capital belongs to the sentence rather than to the word.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let found = {};
  function word_want(word) {
    let wanted = text_lower_to(word);
    property_set(found, wanted, []);
  }
  each(words, word_want);
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_each(passage) {
      let entries = gloss_passage_entries(passage);
      function entry_each(entry) {
        let spelling = property_get(entry, "word");
        let lower = text_lower_to(spelling);
        let wanted = property_exists(found, lower);
        if (wanted) {
          let glosses = property_get(found, lower);
          let gloss = property_get(entry, "gloss");
          list_add(glosses, gloss);
        }
      }
      each(entries, entry_each);
    }
    each(passages, passage_each);
  }
  await list_map_async(chapter_codes, chapter_read);
  let tallies = {};
  function word_tally(word) {
    let wanted = text_lower_to(word);
    let glosses = property_get(found, wanted);
    let tally = list_tally_ranked(glosses);
    let used = list_size(glosses);
    property_set(tallies, wanted, {
      used,
      tally,
    });
  }
  each(words, word_tally);
  let r = {
    chapters: list_size(chapter_codes),
    words: tallies,
  };
  return r;
}
