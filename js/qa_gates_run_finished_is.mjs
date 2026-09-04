import { arguments_assert } from "./arguments_assert.mjs";
import { qa_gates_run_failed_prefix } from "./qa_gates_run_failed_prefix.mjs";
import { text_includes } from "./text_includes.mjs";
export function qa_gates_run_finished_is(printed) {
  "$plain printed";
  "Whether what a share of the gates printed shows the run reached its own ending, rather than stopping somewhere in the middle.";
  "A share is asked for as its own process, and a red one comes back the same way a broken one does: a stopping, with everything it printed carried out inside it. The two have to be told apart, because only one of them is an answer. A run that asked every gate and found some of them complaining says so in a closing summary before it stops. A run whose process died partway never reaches that line, however much it printed first.";
  "Reading the ending rather than counting what came before it is what makes this exact. The names of complaining gates are printed one at a time as each is asked again, so a stopping halfway through that printing leaves a list that is real, shorter than the truth, and impossible to tell from a complete one by looking at it. The closing summary is written once, after the last of them, and is therefore either there or not.";
  arguments_assert(arguments, 1);
  let prefix = qa_gates_run_failed_prefix();
  let is = text_includes(printed, prefix);
  return is;
}
