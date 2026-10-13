import { property_get } from "./property_get.mjs";
import { durations_near_each } from "./durations_near_each.mjs";
import { durations_near_each_cases } from "./durations_near_each_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function durations_near_each_cases_gate_run() {
  "QA gate: putting two tables of recording lengths side by side still answers one shortlist per row, keeps the rows that matched nothing, and treats the slack as a limit rather than a target.";
  "THIS ONE IS HELD BECAUSE IT FAILS BY ANSWERING LESS. The expensive comparison downstream only ever looks at what this puts forward, so a join that quietly stops answering the rows it found nothing for turns a missing source recording into silence, and a join that tightens its slack turns a real pair into a recording nobody has an edit of. Neither of those throws, and neither looks wrong in a result: the answer is still a list of plausible pairs, just short of the ones that mattered.";
  "Throws so the dispatcher seam exits nonzero.";
  function answer(one_case) {
    let rows = property_get(one_case, "rows");
    let rows_other = property_get(one_case, "rows_other");
    let seconds_tolerance = property_get(one_case, "seconds_tolerance");
    let answers = durations_near_each(rows, rows_other, seconds_tolerance);
    return answers;
  }
  let cases = durations_near_each_cases();
  let r = cases_gate_run_generic(
    cases,
    answer,
    "answers",
    "why",
    "shortlists of recordings whose lengths come near each other",
  );
  return r;
}
