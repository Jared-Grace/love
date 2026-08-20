import { path_join } from "./path_join.mjs";
import { folder_gitignore_name } from "./folder_gitignore_name.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function user_data_path_folder(folder) {
  "Where one repo's own record of what has been done to it is kept - the note of when it was last pushed, and anything else asked about that repo rather than about this one.";
  "The folder is given rather than worked out, because the caller is asking about a repo that is not necessarily the one this code lives in. Spelled from the root only if the folder handed over is, so a caller with a real folder gets a real place and nobody else has to know where it lands.";
  let name = "user";
  let file_name = file_name_json(name);
  let folder_name = folder_gitignore_name();
  let f_path = path_join([folder, folder_name, file_name]);
  return f_path;
}
