import { local_function_folder } from "./local_function_folder.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { gloss_chapter_punctuation_entries_repair } from "./gloss_chapter_punctuation_entries_repair.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function gloss_chapters_punctuation_entries_repair(fn) {
  "Drop every explanation across one whole gloss store that explains a mark rather than a word, and answer with the chapters that had any.";
  "The store is read rather than a list of chapters being handed in, so nothing has to be kept in step with what has been authored, and a chapter written after this ran is repaired by running it again.";
  "It answers with only the chapters something was dropped from, because the ones it left alone are what the reader already assumed.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let r = await gloss_chapter_punctuation_entries_repair(chapter_code, fn);
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function repaired_is(chapter) {
    let removed = property_get(chapter, "removed");
    let any = greater_than(removed, 0);
    return any;
  }
  let repaired = list_filter(chapters, repaired_is);
  let r2 = {
    chapters: list_size(chapters),
    repaired: list_size(repaired),
    removed: repaired,
  };
  return r2;
}
