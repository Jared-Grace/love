import { arguments_assert } from "./arguments_assert.mjs";
import { cases_answers_gate_run_generic } from "./cases_answers_gate_run_generic.mjs";
import { list_map } from "./list_map.mjs";
export function cases_gate_run_generic(
  cases,
  answer,
  expected_key,
  described_key,
  label,
) {
  arguments_assert(arguments, 5);
  ("Asks one reader every case a corpus writes down, and refuses the run when any");
  ("case is answered differently from the way it says. Receives the asking as a");
  ("lambda because that is the only part that genuinely differs - which reader,");
  ("and what the case has to be turned into before the reader will take it. What");
  ("the corpus calls its expectation and what it calls its line of description are");
  ("two names, not two lambdas, because every corpus in the repo holds both as a");
  ("plain field.");
  ("What comes back is judged one step further in, in a place that receives the");
  ("answers rather than the reader that made them. That is what lets a reader whose");
  ("answer has to be waited for reuse the whole of the judging instead of copying");
  ("it out a second time.");
  let answers = list_map(cases, answer);
  let r = cases_answers_gate_run_generic(
    cases,
    answers,
    expected_key,
    described_key,
    label,
  );
  return r;
}
