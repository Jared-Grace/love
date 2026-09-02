import { arguments_assert } from "./arguments_assert.mjs";
import { red_proof_names } from "./red_proof_names.mjs";
import { red_proof_read } from "./red_proof_read.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { list_add } from "./list_add.mjs";
import { red_proof_checked } from "./red_proof_checked.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_to } from "./json_to.mjs";
export async function red_proofs_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every corpus that has been checked against wrong versions of its reader still refuses all of them, every let-off still names a version nothing refuses, and every case saying it is the only one catching something still is.");
  ("WHAT IT HOLDS DOWN IS A CORPUS GOING QUIETLY BLIND. A corpus is checked against wrong versions once, and from then on the paragraph saying so is the only record - so a case removed later, or a reader changed so that two of its cases now say the same thing, takes the check apart while every gate stays green. Written down as files the machine can run again, the check is not a paragraph about the past; it is asked afresh on every run.");
  ("It does not refuse a case that carries nothing. That is padding rather than a fault, and whether a case earns its place is a judgment about what a reader is for, which is the author's and not a number's. It is carried out as a report instead, beside the count, so it is in front of whoever is looking without stopping anybody.");
  ("PADDING IS COUNTED TWO WAYS AND ONLY THE FIRST IS WRITTEN OUT IN FULL. A case refusing no wrong version at all is rare and worth a line of its own. A case refusing only wrong versions some other case also refuses is common - the second count runs to a fifth of the cases here - and printing all of those would bury the first under prose nobody would read twice. The count stands in the heading and the rows are in the answer this hands back, which is where to look when the count is the question being asked.");
  ("IT DOES REFUSE A CASE WHOSE OWN WORDS SAY IT IS THE ONLY ONE CATCHING SOMETHING WHEN IT IS NOT. That is not a judgment about whether the case earns its place - it is a sentence disagreeing with the record printed beside it, and the record is worked out before the sentence is read. Three of those were false at once in one corpus and had been read past twice, which is why this one throws where padding only reports.");
  ("A CORPUS THAT WILL NOT READ IN IS A FAULT OF ITS OWN AND NEVER THE END OF THE WALK. The list of corpora grows with every proof written, so a torn file, a name that no longer answers, or a module that throws while loading is a thing that will happen here rather than a thing that might. Waited on plainly it would carry the file's own complaint out of this gate as though the gate had nothing to say, leaving every corpus after it unasked and no name in the answer for an app to be sorted against. Caught, it is one named corpus at fault beside all the others that were still read. The name written down is the reader's own rather than the file's, because a name carrying a dot answers to no function and so could never be sorted against what an app reaches.");
  ("Throws so the dispatcher seam exits nonzero.");
  let names = await red_proof_names();
  let reports = [];
  let faulted = [];
  let unreadable = [];
  for (let name of names) {
    async function proof_read() {
      let got = await red_proof_read(name);
      return got;
    }
    let answered = await catch_message_async(proof_read);
    let came = property_get(answered, "ok");
    if (not(came)) {
      let refused = property_get(answered, "message");
      let fn = function_path_to_name(name);
      list_add(unreadable, {
        fn,
        refused,
      });
      console.log("FAIL  " + fn + "  will not read in: " + refused);
      continue;
    }
    let proof = property_get(answered, "value");
    let checked = red_proof_checked(proof);
    list_add(reports, checked);
    let clean =
      list_empty_is(checked.holes) &&
      list_empty_is(checked.exemptions_stale) &&
      list_empty_is(checked.exemptions_unreasoned) &&
      list_empty_is(checked.claims_unmatched);
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
  }
  console.log("\nred proofs " + reports.length + "  faulted " + faulted.length);
  let wrong = faulted.concat(unreadable);
  let b = list_empty_is(wrong);
  if (not(b)) {
    function lambda(f) {
      let r2 = f.fn;
      return r2;
    }
    let object = wrong.map(lambda);
    throw new Error(
      "red proofs gate: " +
        wrong.length +
        " corpus that will not read in, or with a wrong version nothing refuses, a let-off that no longer holds, or a case claiming to be the only one catching something it does not — " +
        json_to(object),
    );
  }
  let r = {
    reports,
  };
  return r;
}
