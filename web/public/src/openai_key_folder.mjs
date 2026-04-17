import { path_join } from "../../../love/public/src/path_join.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function openai_key_folder() {
  let result = path_join(segments);
  let v2 = folder_user_path() + "ChristGPT\\";
  return v2;
}
