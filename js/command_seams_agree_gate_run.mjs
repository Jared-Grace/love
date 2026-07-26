import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { guard_denied_dispatcher_names } from "./guard_denied_dispatcher_names.mjs";
import { functions_command_seams } from "./functions_command_seams.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function command_seams_agree_gate_run() {
  "Gate: the two copies of the runs-arbitrary-commands list must name the same functions. One copy lives in the python guard, which can only read a command line, and one lives here, where the import graph can be read - both are needed, and a name added to either alone is a hole that looks closed from whichever side you check.";
  "The failure names which side is short, because adding a seam to the guard and forgetting this side leaves a fenced dispatcher happily calling it, while the reverse leaves the command line open.";
  let denied = await guard_denied_dispatcher_names();
  let seams = functions_command_seams();
  let guard_only = list_difference(denied, seams);
  let seams_only = list_difference(seams, denied);
  list_empty_is_assert_json(guard_only, {
    hint: text_combine_multiple([
      "the guard denies these names but ",
      functions_command_seams.name,
      " does not list them — add them there",
    ]),
    guard_only,
  });
  list_empty_is_assert_json(seams_only, {
    hint: text_combine_multiple([
      functions_command_seams.name,
      " lists these names but the guard does not deny them — add them to the guard's floor",
    ]),
    seams_only,
  });
  let r = {
    checked: denied.length,
    agree: true,
  };
  return r;
}
