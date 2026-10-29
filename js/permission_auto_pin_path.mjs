import { path_join } from "./path_join.mjs";
import { claude_config_folder } from "./claude_config_folder.mjs";
export function permission_auto_pin_path() {
  "Where the fingerprint a person approved of the auto grant check is kept.";
  "★ INSIDE CLAUDE CODE'S OWN CONFIGURATION FOLDER, BECAUSE THAT IS THE ONE PLACE CLAUDE CANNOT WRITE WITHOUT THE HUMAN SEEING IT. A built-in guard prompts for every write under it whatever the rules say. Anywhere in the repo would be a file Claude could quietly rewrite to match a check it had just weakened, and the pin would then vouch for exactly what it exists to catch.";
  let folder = claude_config_folder();
  let path = path_join([folder, "love_permission_auto_pin.json"]);
  return path;
}
