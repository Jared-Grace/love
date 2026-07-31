import { process_human_seam_is } from "./process_human_seam_is.mjs";
import { function_command_seams_reached } from "./function_command_seams_reached.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { assert_json } from "./assert_json.mjs";
export async function function_callee_seam_assert(callee_name) {
  "A selector or a transform is named on the command line and then called, so the name decides what runs. From the ai seam a name is accepted only when nothing it imports, however deep, ends at a shell or an eval — which is the difference between naming an edit to make and naming a command to run.";
  let human = process_human_seam_is();
  if (human) {
    return;
  }
  let reached = await function_command_seams_reached(callee_name);
  let clean = list_empty_is(reached);
  assert_json(clean, {
    hint: "a selector or transform should reach no command-running function — was a runner named where an edit was meant?",
    callee_name,
    reached,
  });
}
