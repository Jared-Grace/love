import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { red_proof_names } from "./red_proof_names.mjs";
import { red_proof_read } from "./red_proof_read.mjs";
import { red_proof_checked } from "./red_proof_checked.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_to } from "./json_to.mjs";
export async function red_proofs_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every corpus that has been checked against wrong versions of its reader still refuses all of them, and every let-off still names a version nothing refuses.");
  ("WHAT IT HOLDS DOWN IS A CORPUS GOING QUIETLY BLIND. A corpus is checked against wrong versions once, and from then on the paragraph saying so is the only record - so a case removed later, or a reader changed so that two of its cases now say the same thing, takes the check apart while every gate stays green. Written down as files the machine can run again, the check is not a paragraph about the past; it is asked afresh on every run.");
  ("It does not refuse a case that refuses no wrong version. That is padding rather than a fault, and whether a case earns its place is a judgment about what a reader is for, which is the author's and not a number's. It is carried out as a report instead, beside the count, so it is in front of whoever is looking without stopping anybody.");
  ("Throws so the dispatcher seam exits nonzero.");
  let names = await red_proof_names();
  let reports = [];
  let faulted = [];
  for (let name of names) {
    let proof = await red_proof_read(name);
    let checked = red_proof_checked(proof);
    list_add(reports, checked);
    let clean =
      list_empty_is(checked.holes) &&
      list_empty_is(checked.exemptions_stale) &&
      list_empty_is(checked.exemptions_unreasoned);
    if (not(clean)) {
      list_add(faulted, checked);
    }
    console.log(
      (clean ? "pass  " : "FAIL  ") +
        checked.fn +
        "  cases " +
        checked.cases_count +
        "  wrong " +
        checked.wrong_count +
        "  idle " +
        checked.idle.length,
    );
    for (let row of checked.idle) {
      console.log("      idle case " + row.index + ": " + row.described);
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
  }
  console.log("\nred proofs " + reports.length + "  faulted " + faulted.length);
  let b = list_empty_is(faulted);
  if (not(b)) {
    function lambda(f) {
      let r2 = f.fn;
      return r2;
    }
    let object = faulted.map(lambda);
    throw new Error(
      "red proofs gate: " +
        faulted.length +
        " corpus with a wrong version nothing refuses, or a let-off that no longer holds — " +
        json_to(object),
    );
  }
  let r = {
    reports,
  };
  return r;
}
