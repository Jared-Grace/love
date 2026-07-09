import { path_join } from "../../../love/public/src/path_join.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function folder_user_path_join_generic(path_root, folder, file_name) {
  let result2 = path_join([path_root, text_combine(folder, "\\"), file_name]);
  return result2;
}
