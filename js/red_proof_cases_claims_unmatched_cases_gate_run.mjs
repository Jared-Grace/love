import { arguments_assert } from "./arguments_assert.mjs";
import { red_proof_cases_claims_unmatched_cases } from "./red_proof_cases_claims_unmatched_cases.mjs";
import { property_get } from "./property_get.mjs";
import { red_proof_cases_claims_unmatched } from "./red_proof_cases_claims_unmatched.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function red_proof_cases_claims_unmatched_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("Checks every written-out pair of lists against the cases the reading should pick out of them.");
  ("It pins the numbers of the cases picked out rather than the rows themselves, because a row carries the whole sentence and the sentence is written twice over in the corpus already. What is being decided is which case, not what it said.");
  let cases = red_proof_cases_claims_unmatched_cases();
  function answer(one) {
    let idle = property_get(one, "idle");
    let redundant = property_get(one, "redundant");
    let unmatched = red_proof_cases_claims_unmatched(idle, redundant);
    function lambda(row) {
      let index = property_get(row, "index");
      return index;
    }
    let indexes = unmatched.map(lambda);
    return indexes;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "unmatched",
    "name",
    "red proof cases claims unmatched",
  );
  return r;
}
