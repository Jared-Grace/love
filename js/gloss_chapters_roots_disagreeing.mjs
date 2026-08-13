import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_roots_disagreeing } from "./gloss_chapter_roots_disagreeing.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { object_property_names } from "./object_property_names.mjs";
export async function gloss_chapters_roots_disagreeing(fn) {
  "Every chapter of one gloss store holding an explanation that says nothing about the root an outside dictionary takes its word back to.";
  "It reads only the words already looked up, so it answers on whatever has been gathered so far rather than waiting on a sweep to finish. That is the point: a sweep over thousands of words takes hours, and a reader should be able to see what it has found without stopping it.";
  "The count of words consulted comes back beside the findings, because a small number of findings means one thing when the whole vocabulary has been asked about and quite another when barely any of it has.";
  let known = await binisaya_words_known();
  let list = object_property_names(known);
  let consulted = list_size(list);
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_read(chapter_code) {
    let disagreeing = await gloss_chapter_roots_disagreeing(
      chapter_code,
      fn,
      known,
    );
    let r = {
      chapter_code,
      disagreeing,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_read);
  function disagreeing_is(chapter) {
    let offending = property_list_empty_not_is(chapter, "disagreeing");
    return offending;
  }
  let offenders = list_filter(chapters, disagreeing_is);
  let r2 = {
    consulted,
    offenders,
  };
  return r2;
}
