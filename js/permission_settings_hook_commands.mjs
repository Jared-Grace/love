import { arguments_assert } from "./arguments_assert.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { equal } from "./equal.mjs";
import { json_parse_try } from "./json_parse_try.mjs";
import { assert_json } from "./assert_json.mjs";
import { not } from "./not.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { json_keyed_values } from "./json_keyed_values.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_settings_hook_commands() {
  arguments_assert(arguments, 0);
  ("Every command line the settings files actually declare as a hook, each one paired with the settings file that declares it.");
  ("Read by taking the settings apart rather than by looking through their text, and that is the whole point of it. A hook's file name can appear in a settings file for reasons that start nothing - inside a rule granting permission to run it by hand, inside a key that was renamed, inside a block for an event that no longer fires. Anything asking whether a hook is installed by searching the file for its name counts all of those as installed, so the reading is green exactly when the hook has been unwired but not yet deleted, which is the way a hook is usually turned off.");
  ("Taking the settings apart also catches the file no longer being settings at all. A settings file that stops parsing is ignored in full by what reads it, and every hook in it stops - while its text still holds every name it ever held, so a search through the text still finds them and still says yes. Parsing refuses instead, and names the file.");
  ("A file that is not there is passed over rather than refused, because more than one settings file is looked at and only some of them exist on any given machine. A file that is there and will not parse is a different thing and is not passed over.");
  ("The commands are gathered by asking for every value filed under that name at any depth rather than by walking the blocks level by level. The shape is written by another program and may gain a level without asking, and a walk that knows the shape quietly finds nothing when it does - which here would read as a machine with no hooks at all.");
  let commands = [];
  for (let path of permission_settings_paths()) {
    let text = await file_read_try(path);
    if (equal(text, null)) {
      continue;
    }
    let settings = json_parse_try(text);
    let b = equal(settings, null);
    let b2 = not(b);
    assert_json(b2, {
      hint: "this settings file is on disk but is not readable as settings, so everything it declares - every hook and every rule in it - is being ignored in full while its text still reads as though it were all there",
      path,
    });
    let hooks = property_get_or_null(settings, "hooks");
    if (equal(hooks, null)) {
      continue;
    }
    for (let command of json_keyed_values(hooks, "command")) {
      let row = {
        path,
        command,
      };
      list_add(commands, row);
    }
  }
  return commands;
}
