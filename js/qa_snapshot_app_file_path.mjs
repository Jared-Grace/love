import { folder_public_join } from "./folder_public_join.mjs";
import { path_join } from "./path_join.mjs";
export function qa_snapshot_app_file_path(folder, file_name) {
  "$plain file_name";
  "Where one built piece of an app sits inside the frozen copy";
  "The copy is spelled out in front rather than left to be worked out, which is the whole difference between this and its neighbour that looks in the live repo. Everything else about the two is the same - the same folder name underneath, the same file names in it";
  "That matters because the live repo is being edited by everybody at once, so a path worked out from where this happens to be running would point at whatever was there this second. The copy is frozen, so a path spelled against it points at one commit's worth of work and keeps pointing at it";
  let relative = folder_public_join(file_name);
  let path = path_join([folder, relative]);
  return path;
}
