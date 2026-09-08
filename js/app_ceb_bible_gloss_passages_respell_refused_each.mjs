import { arguments_assert } from "./arguments_assert.mjs";
import { app_ceb_bible_gloss_generate } from "./app_ceb_bible_gloss_generate.mjs";
import { gloss_passage_words_text_first } from "./gloss_passage_words_text_first.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { list_map } from "./list_map.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { local_function_path_json } from "./local_function_path_json.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_passage_entries } from "./gloss_passage_entries.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { add } from "./add.mjs";
import { gloss_passage_words_bare } from "./gloss_passage_words_bare.mjs";
import { gloss_entries_words_bare } from "./gloss_entries_words_bare.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { each } from "./each.mjs";
import { each_async } from "./each_async.mjs";
export async function app_ceb_bible_gloss_passages_respell_refused_each(
  refused_read,
) {
  "The walk the respell itself does over the Cebuano gloss store, handing over every passage it would decline: the chapter it stands in, the words its explanations name, and the words the passage actually has.";
  "★ THE TEST HERE HAS TO STAY THE RESPELL'S OWN TEST OR EVERY READING BUILT ON IT IS ABOUT A DIFFERENT SET. A passage is declined when the two lists do not come to the same number, and that is compared here in the same words the respell compares it in. A reading that measured refusal its own way would look like this one and answer about passages the respell never touched.";
  "The two lists are handed over whole rather than their sizes, because a count says that they disagree and never where, and where is the whole of what mending one needs. A reading wanting only the counts asks the sizes itself, which costs it one line and costs nothing to the reading that wants the words.";
  "Passages with nothing explained in them are passed over before anything is counted and are not counted as seen, because the respell passes over them too - there is no disagreement to have where nobody has written anything.";
  "Nothing is written. The chapters are read off the disk and compared, and the store is left exactly as it was found.";
  "The one parameter names something that runs: it is called once for every declined passage, with the chapter code, the explained words and the written words, and what it does with those three is the whole of what one reading differs from another by.";
  arguments_assert(arguments, 1);
  let fn = app_ceb_bible_gloss_generate;
  let words_read = gloss_passage_words_text_first;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  let passages_seen = 0;
  async function chapter_read(chapter_code) {
    let path = local_function_path_json(chapter_code, fn);
    let chapter = await file_read_json(path);
    let passages = property_get(chapter, "passages");
    function passage_read(passage) {
      let entries = gloss_passage_entries(passage);
      let empty = list_empty_is(entries);
      if (empty) {
        return;
      }
      passages_seen = add(passages_seen, 1);
      let written = gloss_passage_words_bare(passage, words_read);
      let explained = gloss_entries_words_bare(entries);
      let named = list_size(explained);
      let count = list_size(written);
      let counted_same = equal(named, count);
      if (counted_same) {
        return;
      }
      refused_read(chapter_code, explained, written);
    }
    each(passages, passage_read);
  }
  await each_async(chapter_codes, chapter_read);
  let walked = {
    chapters: list_size(chapter_codes),
    passages: passages_seen,
  };
  return walked;
}
