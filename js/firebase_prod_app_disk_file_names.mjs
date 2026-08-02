import { file_names_html_js_present } from "./file_names_html_js_present.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_app_disk_file_names(app_name) {
  "$plain app_name";
  "the pieces of one app that are sitting ready to be sent - which is not always both of them";
  "its neighbour asks the same question of what a frozen copy just built and this asks it of what is waiting to be sent, so the asking itself is shared and all that is left here is where to look";
  async function path_of(file_name) {
    let relative = folder_public_join(file_name);
    let combined = await user_repo_path_combine(relative);
    return combined;
  }
  let present = await file_names_html_js_present(app_name, path_of);
  return present;
}
