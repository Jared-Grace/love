import { arguments_assert } from "./arguments_assert.mjs";
import { permission_file_hook_path } from "./permission_file_hook_path.mjs";
import { file_read } from "./file_read.mjs";
import { permission_settings_hook_commands } from "./permission_settings_hook_commands.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
export async function permission_file_hook_registered_gate_run() {
  "Gate: the hook that grants the file tools straight from the settings rules is still on disk and is still declared as a hook the settings actually start, so the tool calls reach it.";
  "A hook nobody starts fails in the one way nothing else can see. Everything it does is say yes early - before the permission engine has noticed a new rule at all - so the whole of its absence looks like a session that has not restarted yet: the human is asked, they say yes, and no gate anywhere goes red. Renaming the file, or tidying the line that names it out of the settings, would leave the reading beside it green forever.";
  "Held against the commands the settings declare rather than against the whole of their text. Searching the text asks whether the name is written down somewhere, and a name is written down for reasons that start nothing - a rule granting permission to run it by hand would do, and so would a block for an event that no longer fires, and so would a settings file that has stopped parsing and is being ignored in full. All three are a hook that does not run, and all three read as installed to a search through the text. This was written the searching way first and passed with one occurrence in a real command, which is exactly the case that cannot tell the two readings apart.";
  "Named by the file rather than by the whole command, because the command spells this machine's own folders and a copy of the repo checked out somewhere else would fail on the folder instead of on the thing being asked about.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let hook_path = permission_file_hook_path();
  await file_read(hook_path);
  let name = hook_path.split("/").pop();
  let commands = await permission_settings_hook_commands();
  let named_in = [];
  for (let row of commands) {
    if (text_includes(row.command, name)) {
      list_add(named_in, row.path);
    }
  }
  list_empty_not_is_assert_json(named_in, {
    hint: "no settings file declares this hook as one to start, so nothing ever runs it and every new file grant waits for a restart again - check that it is still named in a command inside the hooks block, and not only somewhere in the file",
    hook_path,
    searched: permission_settings_paths(),
    commands,
  });
  let r = {
    hook_path,
    named_in,
  };
  return r;
}
