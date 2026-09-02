import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function ebible_versions_english_choices_upload_path() {
  "Where the list of English bible versions a reader may choose from is filed in the store.";
  let file_name = "choices";
  let file_name_with_extension = file_name_json(file_name);
  let destination = list_join_slash_forward([
    "bibles",
    "en",
    file_name_with_extension,
  ]);
  return destination;
}
