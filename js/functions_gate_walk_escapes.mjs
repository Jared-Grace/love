import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_walked_generic } from "./functions_ast_offenders_walked_generic.mjs";
import { js_collecting_walk_escaped_calls } from "./js_collecting_walk_escaped_calls.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_f_name } from "./property_get_f_name.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_gate_walk_escapes() {
  "Audit: every gate in this repo that waits on a call uncaught inside a loop it is gathering in, beside the calls whose refusal would end the walk where it stood - handed back with how many functions were walked to find them. Read-only.";
  "A gate is the one place this fault costs something nobody can see. It dies inside the callee, so what comes out is the callee's complaint and not the gate's - no list of offenders, no name of anything at fault - and a gate naming nobody cannot be shown to be about somewhere else, so it holds every app in the repo out of a deployment. Two gates did that at once on the first of September 2026, over one chapter with no address written for it, and the walk they promised in their own prose had stopped at the first item.";
  "Only gates are asked, and the same reading over every function in the repo answers with two hundred and twenty seven more. Most of those are right to stop: a sweep reading every file in the repo should not carry on past a file it cannot read, and a writer part way through its work has nothing to gather. Which of them are wrong is a judgment per function and not a rule, so they are left to whoever is reading that function rather than recorded here as faults.";
  "HOW MUCH WAS WALKED TRAVELS OUT BESIDE WHAT WAS FOUND, AND THE COUNT IS OF FUNCTIONS REACHED RATHER THAN OF GATES KEPT. Finding no gate at fault is the answer on a good day and it is also the answer this would give with its reading pointed at a folder that has moved, and the verdict is the same word both times. Only the count falls to nothing on the day the reading breaks. It counts what the sweep opened rather than what survived the filter, because the filter is the part that is allowed to answer nothing.";
  arguments_assert(arguments, 0);
  let sweep = await functions_ast_offenders_walked_generic(
    js_collecting_walk_escaped_calls,
    "calls",
  );
  let found = property_get(sweep, "offenders");
  let walked = property_get(sweep, "walked");
  function gate_is(offender) {
    let f_name = property_get_f_name(offender);
    let gate = text_ends_with(f_name, "_gate_run");
    return gate;
  }
  let gates = list_filter(found, gate_is);
  let r = {
    gates,
    walked,
  };
  return r;
}
