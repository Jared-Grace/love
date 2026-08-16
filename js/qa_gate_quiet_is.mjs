import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { and } from "./and.mjs";
export function qa_gate_quiet_is(told, here) {
  "$plain told";
  "$plain here";
  "Whether both halves of a whole-repo run came back with nothing to complain about - the frozen copy of the folder and this machine alike.";
  "It reads what each half says about itself rather than counting the names it handed over, and the two are not the same answer. A name is read back out of what a share printed, so a share that died before printing anything hands over no names and still knows perfectly well that it was unhappy.";
  arguments_assert(arguments, 2);
  let quiet_copy = property_get(told, "green");
  let quiet_here = property_get(here, "green");
  let quiet = and(quiet_copy, quiet_here);
  return quiet;
}
