import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function ebible_versions_english_choices_upload_path() {
  let file_name = "choices";
  let file_name_with_extension = file_name_json(file_name);
  let destination = list_join_slash_forward([
    "bibles",
    "en",
    file_name_with_extension,
  ]);
  return destination;
}
