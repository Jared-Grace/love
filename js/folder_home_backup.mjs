import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_home_backup(name) {
  "One of the backup repos beside the home folder - the shape the memory notes already sit in.";
  "Each of these is its own git repo holding files that are not source, so the one thing they share is where they live and that is what is named here.";
  let home = folder_home();
  let joined = path_join([home, "backup", name]);
  return joined;
}
