import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { gloss_chapter_words_respell } from "./gloss_chapter_words_respell.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
export async function gloss_chapters_words_respell(fn, words_read) {
  "Give every explanation across one whole gloss store the passage's own spelling of the word it is about, and answer with the chapters whose spellings changed.";
  "The store is read rather than a list of chapters being handed in, so nothing has to be kept in step with what has been authored, and a chapter written after this ran is corrected by running it again.";
  "It answers with only the chapters something changed in, and with every before and after, because a change to what a reader is shown should be readable rather than counted.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_words_respell(chapter_code, fn, words_read);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function changed_is(chapter) {
    let changes = property_get(chapter, "changes");
    let changed = list_empty_not_is(changes);
    return changed;
  }
  let changed = list_filter(chapters, changed_is);
  let r2 = {
    chapters: list_size(chapters),
    changed: list_size(changed),
    spellings: changed,
  };
  return r2;
}
