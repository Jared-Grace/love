import { function_auto } from "./function_auto.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
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
  let checked = await function_auto_check(f_name);
  let ok = property_get(checked, "ok");
  let refused = not(ok);
  if (refused) {
    return checked;
  }
  await function_auto(f_name);
  return checked;
}
