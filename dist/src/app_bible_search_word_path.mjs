import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function app_bible_search_word_path(word) {
  let file_name_with_extension = file_name_json(word);
  let destination = list_join_slash_forward([
    "bible_search",
    file_name_with_extension,
  ]);
  return destination;
}
