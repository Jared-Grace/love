import { property_get } from "./property_get.mjs";
import { function_shadowing_report } from "./function_shadowing_report.mjs";
import { property_set } from "./property_set.mjs";
import { property_not } from "./property_not.mjs";
import { function_auto } from "./function_auto.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
export async function function_auto_checked(f_name) {
  "Canonicalize a function and say whether it still loads, in one command.";
  "Ask the read-only check FIRST and only canonicalize when it says yes. The";
  "order is the whole point: the canonicalize pass THROWS on a name that names";
  "nothing and on a file it cannot process, so running it first threw past the";
  "sweep above this one and discarded every answer already paid for - which is";
  "the failure the check beside it was written to end, fixed there and never";
  "carried up to the composite standing on it.";
  "Asking first also means a file the pipeline chokes on is never written to at";
  "all. The check runs the same pipeline with the one step that reaches the disk";
  "swapped out, so the cost of the guarantee is a second pass over a file that";
  "was going to be parsed anyway.";
  "Say whether the function now hides a name, in the same breath. Hiding a name is forbidden outright rather than tolerated, and the only thing asking was the repo-wide gate, which costs minutes and so gets run by somebody other than whoever wrote the hiding - measured on one day: seven of them, every one landed by a person who could have known in a second. This is that second, spent at the one moment the writer is still here.";
  "It is asked AFTER canonicalizing rather than before, because canonicalizing is itself one of the ways the hiding arrives: the pass writes out calls to sixteen names it reads off the operators, so a local wearing one of those turns the next comparison in that file into a call landing on the local. Asked first, the answer would describe a file that no longer exists.";
  "It reports and does not refuse. What to do about a hidden name is a judgment - if a line below it was reading the outer name, that line was the bug - so renaming the local by itself would quietly settle the question the wrong way. Saying it out loud is the whole of what can be done safely without a reader.";
  let checked = await function_auto_check(f_name);
  let refused = property_not(checked, "ok");
  if (refused) {
    return checked;
  }
  await function_auto(f_name);
  let name = property_get(checked, "name");
  let shadowing = await function_shadowing_report(name);
  property_set(checked, "shadowing", shadowing);
  return checked;
}
