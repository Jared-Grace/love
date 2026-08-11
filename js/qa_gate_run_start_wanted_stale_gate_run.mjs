import { qa_gate_run_start_wanted_stale_cases } from "./qa_gate_run_start_wanted_stale_cases.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_run_start_wanted_stale_generic } from "./qa_gate_run_start_wanted_stale_generic.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_gate_run_start_wanted_stale_gate_run() {
  "Gate: each written-down state of the machine, paired with how long the record has gone unwritten, must give the answer the corpus says about whether to start a whole-repo judging. Throws so the dispatcher seam exits nonzero.";
  "Its neighbour guards against saying yes too easily. This one guards the opposite failure, which is the one that was actually measured: a rule so careful that it said no every time it was ever asked, and a record that stopped growing while the repo it was meant to judge kept moving. Both directions are real, so both are written down, and the pairs are what hold the middle - the same machine appears twice with only the staleness changed, so a rule that quietly ignores the staleness fails here rather than in six months on somebody's deploy.";
  let cases = qa_gate_run_start_wanted_stale_cases();
  function answer(c) {
    let flight = property_get(c, "flight");
    let stale = property_get(c, "stale");
    let wanted = qa_gate_run_start_wanted_stale_generic(flight, stale);
    return wanted;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "wanted",
    "why",
    "qa gate run start wanted stale",
  );
  return r;
}
