import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { folder_app_file_names } from "./folder_app_file_names.mjs";
export async function firebase_prod_app_disk_file_names(app_name) {
  "$plain app_name";
  "the pieces of one app that are sitting ready to be sent - which is not always both of the two it is written as, and is sometimes more than two";
  "its neighbour asks the same question of what a frozen copy just built and this asks it of what is waiting to be sent, so the asking itself is shared and all that is left here is where to look";
  let folder = folder_public_absolute();
  let present = await folder_app_file_names(folder, app_name);
  return present;
}
