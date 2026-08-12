import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { qa_gate_said_history_blind_cases } from "./qa_gate_said_history_blind_cases.mjs";
import { qa_gate_said_history_blind_is } from "./qa_gate_said_history_blind_is.mjs";
import { property_get } from "./property_get.mjs";
export function qa_gate_said_history_blind_cases_gate_run() {
  ("QA gate: each complaint in the corpus is called history blind exactly when the corpus says it is.");
  ("The reader this feeds decides what one red in a run is told about itself, and it is the only red the run explains rather than merely reports. Wrong in one direction it stays silent about a gate that will be red on every run forever; wrong in the other it tells somebody with a real fault to go and edit a list of gate names instead of fixing it.");
  ("It rests on words git prints rather than on words this repo writes, which is the reason to pin it. Nothing here would notice git rewording its own sentence, and a reader that quietly stopped matching would look exactly like a run with nothing of this kind in it.");
  ("Throws so the dispatcher seam exits nonzero");
  function answer(c) {
    let said = property_get(c, "said");
    let blind = qa_gate_said_history_blind_is(said);
    return blind;
  }
  let cases = qa_gate_said_history_blind_cases();
  let r = cases_gate_run_generic(cases, answer, "blind", "why", "history blind");
  return r;
}
