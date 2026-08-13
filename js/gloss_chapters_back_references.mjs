import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_back_references } from "./gloss_chapter_back_references.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
export async function gloss_chapters_back_references(fn) {
  "Every chapter of one gloss store holding an explanation that points the reader further up instead of saying the thing itself.";
  "It reads the store and nothing else. No dictionary is asked and no word is looked up, so it covers every chapter and every word rather than the corner an outside reference happens to know - and what it finds is an explanation that was never given, which is certain in a way a disagreement with a dictionary is not.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let pointing = await gloss_chapter_back_references(chapter_code, fn);
    let r = {
      chapter_code,
      pointing,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function pointing_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "pointing");
    return offending;
  }
  let offenders = list_filter(chapters, pointing_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r2;
}
