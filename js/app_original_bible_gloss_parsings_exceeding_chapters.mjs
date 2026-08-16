import { list_size } from "./list_size.mjs";
import { app_original_bible_gloss_generate } from "./app_original_bible_gloss_generate.mjs";
import { app_original_bible_gloss_parsings_exceeding } from "./app_original_bible_gloss_parsings_exceeding.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
export async function app_original_bible_gloss_parsings_exceeding_chapters() {
  "How many chapters of the original-language gloss have been authored, and which of them hold an explanation that names a tense, a mood or a form no word of its own passage carries.";
  "The store is read rather than a list of chapters being handed in, so a chapter authored later is checked from the moment it is written and nobody has to remember to name it anywhere.";
  "Only the places with nowhere to point are carried back. The far commoner sort, where the named form does stand on some other word of the passage, is what an explanation comparing one word with its neighbours looks like from here, and gathering those would bury the few that want an answer.";
  "How many chapters were walked travels out beside them, because finding nothing and looking at nothing are the same word otherwise, and a store read out of a folder is exactly the sweep that can quietly start reading an empty one.";
  let fn = app_original_bible_gloss_generate;
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let r = await app_original_bible_gloss_parsings_exceeding(chapter_code);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function exceeding_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "exceeding");
    return offending;
  }
  let offenders = list_filter(chapters, exceeding_is);
  function offender_shown(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let exceeding = property_get(chapter, "exceeding");
    let r = {
      chapter_code,
      exceeding,
    };
    return r;
  }
  let shown = list_map(offenders, offender_shown);
  let r = {
    chapters: list_size(chapter_codes),
    offenders: shown,
  };
  return r;
}
