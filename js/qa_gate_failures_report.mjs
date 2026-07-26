import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_and_empty_not_is } from "./text_and_empty_not_is.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_gate_failures_report(results, gates) {
  "Asks each complaining gate again, on its own, so its output belongs to it and";
  "can be read. The quiet run says which gate is unhappy; this one says why.";
  "Results come back in the order the gates were given, so a result and its gate";
  "share an index and no lookup by name is needed.";
  "The verdict is the first run's and the output is the second run's, so the two";
  "can disagree - with many hands editing at once, a gate reads a file mid-edit,";
  "complains, and is quiet a moment later. Which of those happened is said out";
  "loud, because a failure printed above output reporting nothing wrong reads as";
  "a broken gate, and the reader goes looking for a fault that is not there.";
  let failed = [];
  let size = list_size(results);
  for (let index = 0; less_than(index, size); index++) {
    let result = list_get(results, index);
    let error_message = property_get(result, "error_message");
    let complained = text_and_empty_not_is(error_message);
    let quiet = not(complained);
    if (quiet) {
      continue;
    }
    let name = property_get(result, "name");
    list_add(failed, name);
    console.log("\n=== " + name + " ===");
    let gate = list_get(gates, index);
    try {
      await gate();
      console.log(
        "QUIET ON THE SECOND ASK  " +
          name +
          ": it complained while the others were running and had nothing to say when asked on its own, which is what a file being edited mid-run looks like",
      );
    } catch (e) {
      console.log("GATE FAILED  " + name + ": " + e.message);
      await qa_gate_blame_print(e.message);
    }
  }
  return failed;
}
