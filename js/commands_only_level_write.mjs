import { arguments_assert } from "./arguments_assert.mjs";
import { commands_only_levels } from "./commands_only_levels.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { commands_only_path } from "./commands_only_path.mjs";
import { file_write_json } from "./file_write_json.mjs";
export async function commands_only_level_write(level) {
  "turns the commands-only switch to one of its settings, refusing any word that is not one of them";
  "a word that is not a setting would otherwise be written to the file and read back by the hook, which does not know the settings apart and would treat an unknown one as limiting nothing. A typo would then read exactly like off, and the switch would look on while doing nothing at all.";
  "deliberately not granted, on either side. Turning it on is a decision, and turning it off is the only way out of the restriction, so a Claude that could turn it off would reach for that the first time a transform was missing - which is precisely the moment the missing transform is supposed to get written instead.";
  arguments_assert(arguments, 1);
  let levels = commands_only_levels();
  list_includes_assert_json(levels, level, {
    hint: "that is not one of the settings the commands-only switch can be turned to",
  });
  let path = commands_only_path();
  let record = {
    level,
  };
  await file_write_json(path, record);
  return record;
}
