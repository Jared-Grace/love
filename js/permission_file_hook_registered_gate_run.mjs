import { arguments_assert } from "./arguments_assert.mjs";
import { permission_file_hook_path } from "./permission_file_hook_path.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { file_read } from "./file_read.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_includes } from "./text_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function permission_file_hook_registered_gate_run() {
  "Gate: the hook that grants the file tools straight from the settings rules is still on disk and still named in a settings file, so the tool calls actually reach it.";
  "A hook nobody starts fails in the one way nothing else can see. Everything it does is say yes early - before the permission engine has noticed a new rule at all - so the whole of its absence looks like a session that has not restarted yet: the human is asked, they say yes, and no gate anywhere goes red. Renaming the file, or tidying the line that names it out of the settings, would leave the reading beside it green forever.";
  "Named by the file rather than by the whole line, because the line spells this machine's own folders and a copy of the repo checked out somewhere else would fail on the folder instead of on the thing being asked about.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let hook_path = permission_file_hook_path();
  await file_read(hook_path);
  let name = hook_path.split("/").pop();
  let registered = false;
  let named_in = [];
  for (let path of permission_settings_paths()) {
    let text = await file_read_try(path);
    if (equal(text, null)) {
      continue;
    }
    if (text_includes(text, name)) {
      registered = true;
      named_in.push(path);
    }
  }
  if (not(registered)) {
    assert_json(registered, {
      hint: "no settings file names this hook, so nothing ever starts it and every new file grant waits for a restart again",
      hook_path,
      searched: permission_settings_paths(),
    });
  }
  let r = {
    hook_path,
    named_in,
  };
  return r;
}
