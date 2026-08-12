import { arguments_assert } from "./arguments_assert.mjs";
import { commands_only_hook_path } from "./commands_only_hook_path.mjs";
import { file_read } from "./file_read.mjs";
import { commands_only_path } from "./commands_only_path.mjs";
import { text_includes } from "./text_includes.mjs";
import { assert_json } from "./assert_json.mjs";
export async function commands_only_hook_path_gate_run() {
  "Gate: the hook that refuses the editing tools still reads the switch from the file the repo says holds it.";
  "the hook runs with whatever working folder it is handed, so it cannot ask a function where the switch is - it has to spell the place out. That makes two spellings of one place, and the drift is silent in the dangerous direction: a hook reading a file that moved reads nothing, treats nothing as off, and refuses nothing, while every reading from this side still says the switch is on.";
  arguments_assert(arguments, 0);
  let hook_path = commands_only_hook_path();
  let text = await file_read(hook_path);
  let switch_path = commands_only_path();
  let spelled = text_includes(text, switch_path);
  assert_json(spelled, {
    hint: "the hook no longer spells the place the switch is kept, so it cannot see the switch turn",
    hook_path,
    switch_path,
  });
  let r = {
    hook_path,
    switch_path,
  };
  return r;
}
