import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { fn_name } from "./fn_name.mjs";
export function qa_gate_machine_red_print(here) {
  "$plain here";
  arguments_assert(arguments, 1);
  ("The line that says which of a red run's complaints are about this machine at this moment rather than about the commit the run stood on.");
  ("The two halves of a run mean different things and are thrown as one sentence, which is right - neither half should be able to go red quietly. But a reader who takes the whole sentence as one kind of fact reads half of it wrongly, and there are two ways that goes.");
  ("A complaint from the frozen copy is about a named commit. It can be asked again and gives the same answer, it is written down under that commit, and who last touched what it named is printed above. A complaint from this machine is about the living folder as it stood a moment ago - nothing is written down about it, nothing above blames anybody for it, and asking it again on its own is a real second look that may legitimately answer differently because a neighbour has since put it right.");
  ("Measured on 2026-08-13: two gates went red in a run and green when asked again minutes later. One was ",
    fn_name("function_imports_gate_run"),
    " on the copy half, red about a real commit that a neighbour repaired in a later one; the other was ",
    fn_name("permission_reachable_gate_run"),
    " on this half, red about the folder as it was that minute. Telling those two apart took an afternoon, and the run already knew which was which.");
  let failed = property_get(here, "failed");
  let none = list_empty_is(failed);
  if (none) {
    return false;
  }
  let joined = list_join_comma(failed);
  console.log(
    "\nABOUT THIS MACHINE, NOT THE COMMIT  " +
      joined +
      "\n  These were asked of the living folder, so nothing above blames anybody for them and nothing is written down under a commit. Ask one again on its own before believing it - a neighbour may have put it right already.",
  );
  return true;
}
