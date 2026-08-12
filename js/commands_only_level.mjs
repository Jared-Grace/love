import { commands_only_path } from "./commands_only_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { commands_only_level_off } from "./commands_only_level_off.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
export async function commands_only_level() {
  "which setting the commands-only switch is turned to right now";
  "a missing file reads as off on purpose. The switch is a restriction, so failing the other way would let a file that never arrived - a fresh clone, a half-finished write - stop every Claude in the folder at once, with the reason nowhere on screen. Off is also what the folder did for its whole life before the switch existed, so it is the reading that surprises nobody.";
  let path = commands_only_path();
  let there = await file_exists(path);
  if (not(there)) {
    let off = commands_only_level_off();
    return off;
  }
  let record = await file_read_json(path);
  let level = property_get(record, "level");
  return level;
}
