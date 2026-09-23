import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_repo_lookup_reaching } from "./qa_gates_repo_lookup_reaching.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gates_repo_lookup_reaching_gate_run() {
  "Gate: no gate may spell a folder as the public folder joined onto whichever repo this machine is currently pointed at. Read-only.";
  "Every gate is judged inside a frozen copy of the repo, and only committed files are in that copy. The answer to that question lives in a setting nobody commits, so asked in there it comes back with no repo of that name and throws.";
  "A gate that throws is worse than a gate that fails. It writes down no offenders, and a gate naming nobody cannot be shown to be about somewhere else, so it counts against every app and holds the whole site out of every deployment. Measured 2026-08-26: two gates were doing this and between them made sixteen judged commits unshippable for every app. Both were found the same way, by spending a quarter of an hour judging a commit in order to be told the name of the next one. This is that quarter of an hour, spent once and in the open.";
  "Measured against zero, and it took a narrower question to get there. Asked about the bare lookup instead, eighteen gates answered, every one of them reaching it to find out which project to ask over the wire - a real question with a real answer and no folder in it - and the first new gate the check ever met was another of those. Asked about the join, nobody answers, because the ten places that spelled it that way were all put right on the day this was written.";
  arguments_assert(arguments, 0);
  let found = await qa_gates_repo_lookup_reaching();
  let walked = property_get(found, "walked");
  let offenders = property_get(found, "offenders");
  let hint = text_combine_multiple([
    "this gate spells a folder by joining the public folder onto whichever repo this machine is pointed at, and that lookup throws inside the frozen copy every gate is judged in - work the folder out from where the code is standing instead, with ",
    fn_name("folder_public_absolute"),
    " or its joining neighbour",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
