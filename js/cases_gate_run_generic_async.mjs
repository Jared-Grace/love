import { arguments_assert } from "./arguments_assert.mjs";
import { cases_answers_gate_run_generic } from "./cases_answers_gate_run_generic.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function cases_gate_run_generic_async(
  cases,
  answer,
  expected_key,
  described_key,
  label,
) {
  arguments_assert(arguments, 5);
  ("Asks one reader every case a corpus writes down, waiting on each answer, and");
  ("refuses the run when any case is answered differently from the way it says.");
  ("The twin of the plain one, for a reader whose answer has to be waited for.");
  ("Waiting was the only difference, so it is the only thing written here - what to");
  ("do with the answers is the same sixty lines either way and lives in one place.");
  let answers = await list_map_async(cases, answer);
  let r = cases_answers_gate_run_generic(
    cases,
    answers,
    expected_key,
    described_key,
    label,
  );
  return r;
}
