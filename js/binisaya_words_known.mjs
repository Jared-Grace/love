import { binisaya_word_read } from "./binisaya_word_read.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { folder_read_files_exists_ensure } from "./folder_read_files_exists_ensure.mjs";
import { folder_user_storage_function_path } from "./folder_user_storage_function_path.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function binisaya_words_known() {
  "Every Cebuano word already looked up on binisaya.com, gathered out of the saved answers into one reading keyed by the word itself.";
  "The saved answers are filed under a name made from the whole call rather than under the word, which is right for finding one again and useless for asking what is held altogether. This reads them back and keys them by the word each one is about, which is the shape a bundle is sent in and the shape a caller asks a question in.";
  let folder = folder_user_storage_function_path(binisaya_word_read);
  let file_names = await folder_read_files_exists_ensure(folder);
  async function saved_answer_read(file_name) {
    let path = path_join([folder, file_name]);
    let data = await file_read_json(path);
    let result = property_get(data, "result");
    return result;
  }
  let results = await list_map_async(file_names, saved_answer_read);
  let known = {};
  function result_add(result) {
    let word = property_get(result, "word");
    property_set(known, word, result);
  }
  each(results, result_add);
  return known;
}
