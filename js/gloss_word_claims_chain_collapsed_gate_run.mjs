import { gloss_word_claims_chain_collapsed_cases } from "./gloss_word_claims_chain_collapsed_cases.mjs";
import { less_than } from "./less_than.mjs";
import { gloss_word_claims_chain_collapsed } from "./gloss_word_claims_chain_collapsed.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
import { greater_than } from "./greater_than.mjs";
export function gloss_word_claims_chain_collapsed_gate_run() {
  "Gate: the claims folded in under a deeper reading, and the ones left standing apart, are the ones the written-down cases say they should be. Throws so the dispatcher seam exits nonzero.";
  "What this is guarding is a queue of faults that a person reads by hand. A claim folded in wrongly leaves a real disagreement out of that queue and nothing ever says so, which is the expensive direction; a claim left standing wrongly only costs a reading.";
  "The pair naming each other as roots is the case the gate exists for. There is no deeper reading between them, so a rule that folded either one in would be settling by itself a question the dictionary never answered.";
  "Both orders of the same two claims are checked, because an answer that depends on which chapter was read first is not an answer.";
  let written = gloss_word_claims_chain_collapsed_cases();
  let known = written.known;
  let cases = written.cases;
  let defects = [];
  let size = cases.length;
  let i = 0;
  while (less_than(i, size)) {
    let one = cases[i];
    let read = gloss_word_claims_chain_collapsed(known, one.claims);
    let kept_wrong = json_equal_not(read.kept, one.kept);
    let collapsed_wrong = json_equal_not(read.collapsed, one.collapsed);
    let wrong = kept_wrong || collapsed_wrong;
    if (wrong) {
      defects.push({
        claims: one.claims,
        wanted: one,
        read,
      });
      console.log(
        "claims chain  " +
          one.claims.join(" ") +
          "  wanted kept " +
          one.kept.join(" ") +
          "  read kept " +
          read.kept.join(" ") +
          "  collapsed " +
          read.collapsed.length,
      );
    }
    i = i + 1;
  }
  let count = defects.length;
  console.log("claims chain collapsed defects: " + count);
  let any = greater_than(count, 0);
  if (any) {
    throw new Error(
      "gloss word claims chain collapsed gate: " +
        count +
        " sets of claims sorted wrong - a real disagreement is being folded away as a deeper reading, or a deeper reading is being queued as a fault",
    );
  }
  let r = {
    checked: size,
    defects: 0,
  };
  return r;
}
