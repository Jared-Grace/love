import { folder_app_file_names } from "./folder_app_file_names.mjs";
import { folder_public } from "./folder_public.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
export async function firebase_prod_app_disk_file_names(app_name) {
  "$plain app_name";
  "the pieces of one app that are sitting ready to be sent - which is not always both of the two it is written as, and is sometimes more than two";
  "its neighbour asks the same question of what a frozen copy just built and this asks it of what is waiting to be sent, so the asking itself is shared and all that is left here is where to look";
  let fop = folder_public();
  let folder = await user_repo_path_combine(fop);
  let present = await folder_app_file_names(folder, app_name);
  return present;
}
