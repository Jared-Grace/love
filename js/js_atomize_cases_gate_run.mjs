import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { js_atomize_cases } from "./js_atomize_cases.mjs";
import { js_code_atomize_lifted_count } from "./js_code_atomize_lifted_count.mjs";
import { property_get } from "./property_get.mjs";
export async function js_atomize_cases_gate_run() {
  "QA gate: the lifting pass takes exactly as many calls out of each written-out piece of code as the corpus says";
  "The pass holds back in three places - a loop header, the pieces of a comma-joined comment, and the right of a guard - and in all three holding back is indistinguishable from doing nothing at all. So a pass that had stopped lifting anything would be right about those and would still fail here, on the six that must be lifted";
  "The other direction is the one that has already cost something. A guard quietly dropped is silent too: the code still reads, the gates still pass, and the only sign is a lookup running on nothing somewhere far away. That is what happened on 2026-08-03, and the first case is that exact line";
  "The second case is the first one with its two sides swapped, and that pair is what makes this a proof rather than a set of agreeing examples. The same code, the same call, the same comparison - only which side of the and it stands on differs. A pass with the guard taken out lifts both and fails the first; a pass whose guard fires too widely lifts neither and fails the second. No mutation of the pass is needed to show the corpus can tell";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_atomize_cases();
  async function answer(c) {
    let code = property_get(c, "code");
    let lifted = await js_code_atomize_lifted_count(code);
    return lifted;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "lifted",
    "name",
    "atomize",
  );
  return r;
}
