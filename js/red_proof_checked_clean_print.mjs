import { arguments_assert } from "./arguments_assert.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function red_proof_checked_clean_print(checked) {
  "$plain checked";
  "Whether one checked corpus came out clean, printed as it is worked out: a heading line saying so, then a line for every idle case, every case whose own words claim more than it catches, every wrong version nothing refuses, and every let-off that no longer holds.";
  "IT IS LIFTED OUT OF THE GATE BECAUSE THE GATE OUTGREW ITS CEILING, and this is the run that could leave without anything having to be threaded back in: the whole of it is about one corpus, it reads nothing else the gate is holding, and the only thing the gate wants back is the one word it decides.";
  "THE VERDICT IS WORKED OUT HERE RATHER THAN BESIDE THE PRINTING, because the heading line spells that verdict out and a caller deciding it separately is two places that can come to different conclusions about the same corpus. Handing it back is what lets the caller keep the faulted ones without asking the question twice.";
  "Every line is printed rather than gathered and returned, because a corpus with three faults wants all three in front of whoever is looking, and the count that the gate throws is the one thing a later reader can ask for again.";
  arguments_assert(arguments, 1);
  let clean =
    list_empty_is(checked.holes) &&
    list_empty_is(checked.exemptions_stale) &&
    list_empty_is(checked.exemptions_unreasoned) &&
    list_empty_is(checked.claims_unmatched);
  console.log(
    (clean ? "pass  " : "FAIL  ") +
      checked.fn +
      "  cases " +
      checked.cases_count +
      "  wrong " +
      checked.wrong_count +
      "  idle " +
      checked.idle.length +
      "  spare " +
      checked.redundant.length,
  );
  for (let row of checked.idle) {
    console.log(
      "      refuses nothing, case " + row.index + ": " + row.described,
    );
  }
  for (let row of checked.claims_unmatched) {
    console.log(
      "      says it is the only one catching something, and catches nothing no other case catches, case " +
        row.index +
        ": " +
        row.described,
    );
  }
  for (let hole of checked.holes) {
    console.log("      refused by nothing: " + hole);
  }
  for (let stale of checked.exemptions_stale) {
    console.log("      let-off nobody needs: " + stale);
  }
  for (let unreasoned of checked.exemptions_unreasoned) {
    console.log("      let-off with no reason given: " + unreasoned);
  }
  return clean;
}
