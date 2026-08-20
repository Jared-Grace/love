import { bible_search_folder } from "./bible_search_folder.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function bible_search_word_path(word) {
  let file_name_with_extension = file_name_json(word);
  let folder = bible_search_folder();
  let destination = list_join_slash_forward([folder, file_name_with_extension]);
  return destination;
}
