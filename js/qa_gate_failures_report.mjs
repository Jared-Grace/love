import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
import { null_is } from "./null_is.mjs";
import { functions_names } from "./functions_names.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
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
  "every function in every repo is read once, and only once something has actually gone red - a green run pays nothing for it, and a run with four red gates pays for it once rather than four times";
  let known = null;
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
      console.log(qa_gate_failed_prefix() + name + ": " + e.message);
      let first = null_is(known);
      if (first) {
        known = await functions_names();
      }
      await qa_gate_blame_print(e.message, known);
    }
  }
  return failed;
}
