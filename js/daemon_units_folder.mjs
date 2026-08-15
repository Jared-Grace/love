import os from "os";
import { path_join } from "./path_join.mjs";
export function daemon_units_folder() {
  "The folder holding the file that describes each daemon to the machine.";
  "A user unit, not a system one: these run as the human who owns the repo, with no root anywhere.";
  "It is spelled here rather than at each place that wants it, because a unit file names the folders the daemon runs in, so anything asking what still points at an old folder has to look in here too.";
  let v = os.homedir();
  let folder = path_join([v, ".config", "systemd", "user"]);
  return folder;
}
