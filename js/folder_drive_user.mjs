import { folder_drive_removable } from "./folder_drive_removable.mjs";
import { path_join } from "./path_join.mjs";
export function folder_drive_user() {
  "The folder on the removable drive holding what belongs to the person rather than to any repo, named from the root.";
  "It sits inside the drive's gathering folder alongside the copies of the repositories, with the kind of thing at the top, so that everything the repos put on this drive is together and told apart by what it is.";
  "Nothing in the code reads from here. It is named so that the move can be written down and carried out by the same reading that carries out every other one, because the alternative is a folder whose new home is known and unsayable, repaired by hand in the few places that spell it and forgotten in the rest.";
  let drive = folder_drive_removable();
  let folder = path_join([drive, "a", "user"]);
  return folder;
}
