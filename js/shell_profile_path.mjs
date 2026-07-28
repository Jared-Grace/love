import os from "os";
import { path_join } from "./path_join.mjs";
export function shell_profile_path() {
  "The file a shell reads when it starts on this machine. An environment variable set anywhere else lives only as long as the one terminal that set it, so this is where a setting has to land to survive a reboot.";
  let home = os.homedir();
  let profile = path_join([home, ".bashrc"]);
  return profile;
}
