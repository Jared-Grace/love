import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function child_group_kill(child) {
  "$plain child";
  "Ends a program started here together with everything that program started, rather than only the one process named.";
  arguments_assert(arguments, 1);
  ("★ ENDING THE NAMED PROCESS ALONE LEAVES THE WORK RUNNING. A build started through npx is three processes deep - npx starts a shell and the shell starts webpack - and the one burning the processor is the deepest of the three. Ending the first leaves the other two with no parent and nothing watching them, which is the same fault it was reaching for with the ability to see it removed. Counted on a real build on the 21st of August rather than assumed.");
  ("A negative number asks for the group rather than the one process. That is what makes this depend on the caller having started the program in a group of its own: without that, the group is the caller's own, and this would end the caller along with everything else sharing it.");
  let pid = property_get(child, "pid");
  let group = subtract(0, pid);
  process.kill(group, "SIGKILL");
}
