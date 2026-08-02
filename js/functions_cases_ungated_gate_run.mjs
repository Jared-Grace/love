import { functions_cases_ungated } from "./functions_cases_ungated.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function functions_cases_ungated_gate_run() {
  "QA gate: every written-down corpus in this repo is read by a gate, so the cases somebody wrote are actually put to something.";
  "A corpus left out of the run is the quiet half of the failure the corpora exist for. The sweep it belongs to passes by finding nothing, which is also what it does when its reader has stopped looking - so the cases are the only thing that can tell those apart, and a corpus nothing reads has taken that away while still sitting in the folder looking like cover.";
  "It ratchets against nothing rather than against a written-down set. Every corpus here is read today, and a set to compare against would only be somewhere for the next unread one to be put down quietly.";
  let ungated = await functions_cases_ungated();
  list_empty_is_assert_json(ungated, {
    ungated,
    hint: "these corpora are written and no gate reads them - a gate written by copying its neighbour keeps the neighbour's corpus, so look at the gate that should be reading each one rather than at the cases",
  });
  let r = {
    ungated: 0,
  };
  return r;
}
