import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_told_answered_cases } from "./qa_gate_told_answered_cases.mjs";
import { qa_gate_told_answered_is } from "./qa_gate_told_answered_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function qa_gate_told_answered_cases_gate_run() {
  "QA gate: each shape a run of the gates has come back in amounts to an answer, or does not, exactly as the corpus beside it says.";
  "This is the one question standing between a run that died and the shared record. Everything downstream of it treats what it is handed as a verdict about a commit, and a verdict cannot be taken back - a commit that looks judged is never judged again, so a wrong answer here is not corrected by anything later.";
  "Both directions cost something and they are not the same cost. Called answered when it was not, a stopping gets written down as a judgement and every reader after that is told nothing is red at a commit nobody ever finished looking at. Called unanswered when it was, a real judging is thrown away and the next person pays a quarter of an hour to have it made again. The second is the one to be wrong in, which is why green and a named gate are both written down here rather than only the shape being guarded against.";
  arguments_assert(arguments, 0);
  let cases = qa_gate_told_answered_cases();
  function answer(c) {
    let told = property_get(c, "told");
    let r = qa_gate_told_answered_is(told);
    return r;
  }
  let r2 = cases_gate_run_generic(
    cases,
    answer,
    "answer",
    "why",
    "qa gate told answered",
  );
  return r2;
}
