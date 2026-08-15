import { path_join } from "./path_join.mjs";
import { folder_home } from "./folder_home.mjs";
export function folder_alarm_sync() {
  "The phone project that carries the alarms across, kept beside the human's other phone projects.";
  "The home folder underneath is asked of the machine rather than written down, so this reads the same on anybody else's, and the place is spelled here once so that moving it is one edit rather than a hunt.";
  "No separator on the end, which is how every other folder here answers. The one caller hands this to git as a place to work in, and git reads a folder the same either way.";
  let home = folder_home();
  let folder = path_join([home, "AndroidStudioProjects", "AlarmSync"]);
  return folder;
}
