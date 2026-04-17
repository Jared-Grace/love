import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function openai_key_folder() {
  let p2 = folder_user_path();
  let p = path_join([p2, "ChristGPT"]);
  return p;
}
