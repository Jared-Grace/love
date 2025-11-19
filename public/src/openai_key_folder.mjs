import { marker } from "../../../love/public/src/marker.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
export function openai_key_folder() {
  marker("1");
  let v2 = folder_user_path() + "ChristGPT\\";
  return v2;
}
