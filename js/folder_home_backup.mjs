import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
export function folder_home_backup(name) {
  "One of the backup repos this repo keeps outside itself - the shape the memory notes already sit in.";
  "Each of these is its own git repo holding files that are not source, so the one thing they share is where they live and that is what is named here.";
  "They sit under one gathering folder rather than loose in the home folder, with the kind of thing at the top and the repo named inside it, so that a second repo doing the same has somewhere obvious to go and the home folder does not fill up with one folder per repo per kind.";
  let home = folder_home();
  let joined = path_join([home, "a", "backup", name]);
  return joined;
}
