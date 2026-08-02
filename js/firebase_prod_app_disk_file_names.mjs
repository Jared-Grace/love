import { file_names_html_js } from "./file_names_html_js.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_exists } from "./file_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function firebase_prod_app_disk_file_names(app_name) {
  "$plain app_name";
  "the pieces of one app that are sitting ready to be sent - which is not always both of them";
  "each one is asked for rather than assumed present. taking the pair on faith made every page carrying no script of its own report one that was never there. its neighbour asks the same question of what is being served and this asks it of what is waiting to be";
  let candidates = file_names_html_js(app_name);
  let present = [];
  for (let file_name of candidates) {
    let relative = folder_public_join(file_name);
    let combined = await user_repo_path_combine(relative);
    let there = await file_exists(combined);
    if (there) {
      list_add(present, file_name);
    }
  }
  return present;
}
