import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { property_not } from "./property_not.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
import { null_is } from "./null_is.mjs";
import { functions_names } from "./functions_names.mjs";
import { qa_gate_blame_print } from "./qa_gate_blame_print.mjs";
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
  "WORKING OUT WHO LAST TOUCHED SOMETHING IS A DECORATION, AND A DECORATION MAY NEVER TAKE A VERDICT WITH IT. It is the last thing printed under each name and it reads history in neighbouring repositories to do it, so it has more ways to fail than the gate it is describing. Thrown from here it does not merely lose the name it was decorating: it ends this loop, so every gate after it in the list is never printed either, and the share dies holding the only copy of what they said.";
  "Measured 2026-09-04: a predicate answering whether a folder is under version control matched one of the two ways the history tool words a refusal, and threw on the other - which is the wording it uses on a temporary filesystem, which is where the frozen copy lives. Both shares of a run died inside this loop. Ten gates had been printed and the rest were lost, and what was filed against that commit read as the whole list of what was wrong. The predicate was repaired, but repairing it only closed the one road in; guarded here, no road in can do it again.";
  "The note is printed rather than swallowed, because a run whose blame is silently missing looks exactly like a run where nobody had touched anything.";
  let known = null;
  let failed = [];
  let size = list_size(results);
  for (let index = 0; less_than(index, size); index++) {
    let result = list_get(results, index);
    let quiet = property_not(result, "red");
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
      try {
        let first = null_is(known);
        if (first) {
          known = await functions_names();
        }
        await qa_gate_blame_print(e.message, known);
      } catch (blame_complaint) {
        console.log(
          "NO BLAME FOR  " +
            name +
            ": working out who last touched this failed (" +
            blame_complaint.message +
            "), which changes nothing about the gate above and must not stop the gates below being printed",
        );
      }
    }
  }
  return failed;
}
