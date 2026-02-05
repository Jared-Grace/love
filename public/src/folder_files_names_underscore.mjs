import { string_replace_space_underscore } from "../../../love/public/src/string_replace_space_underscore.mjs";
import { folder_files_names_transform } from "../../../love/public/src/folder_files_names_transform.mjs";
export async function folder_files_names_underscore(path) {
  let list = await folder_files_names_transform(
    path,
    string_replace_space_underscore,
  );
  return list;
}
