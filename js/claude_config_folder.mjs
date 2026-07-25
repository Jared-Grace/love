import os from "os";
import { path_join } from "./path_join.mjs";
export function claude_config_folder() {
  "Claude Code's own configuration directory. Anything under it is governed by a built-in self-settings guard that prompts the human no matter what the permission rules say, so tooling that reasons about that guard needs one spelling of the folder rather than several.";
  let home = os.homedir();
  let folder = path_join([home, ".claude"]);
  return folder;
}
