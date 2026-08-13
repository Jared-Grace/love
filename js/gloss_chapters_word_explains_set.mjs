import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { file_name_json_name } from "./file_name_json_name.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { gloss_chapter_word_explains_set } from "./gloss_chapter_word_explains_set.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
export async function gloss_chapters_word_explains_set(
  fn,
  explains,
  lambda$explain,
) {
  "Give every explanation in one whole gloss store that is about a named word, and that the caller is willing to write over, the wording written for that word - answering with the chapters it rewrote.";
  "The chapters it left alone are counted rather than listed, because a store runs to hundreds of them and a reader wanting to check the work wants the handful that moved.";
  let folder = local_function_folder(fn);
  let file_names = await folder_read_files_exists_ensure(folder);
  let chapter_codes = list_map(file_names, file_name_json_name);
  async function chapter_set(chapter_code) {
    let changed = await gloss_chapter_word_explains_set(
      chapter_code,
      fn,
      explains,
      lambda$explain,
    );
    let r = {
      chapter_code,
      changed,
    };
    return r;
  }
  let chapters = await list_map_async(chapter_codes, chapter_set);
  function changed_is(chapter) {
    let moved = property_list_empty_not_is(chapter, "changed");
    return moved;
  }
  let rewritten = list_filter(chapters, changed_is);
  let r2 = {
    chapters: list_size(chapter_codes),
    rewritten,
  };
  return r2;
}
