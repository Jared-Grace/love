import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { web_assets_bible_uplifting_folder_name } from "./web_assets_bible_uplifting_folder_name.mjs";
export function web_assets_bible_uplifting_path(file_name) {
  "$plain file_name";
  "Where one uplifting-verses file sits under the assets folder.";
  let folder_name = web_assets_bible_uplifting_folder_name();
  let combined = list_join_slash_forward([folder_name, file_name]);
  return combined;
}
