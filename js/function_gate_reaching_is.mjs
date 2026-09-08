import { arguments_assert } from "./arguments_assert.mjs";
import { function_callers_calling_closure } from "./function_callers_calling_closure.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function function_gate_reaching_is(name) {
  "Whether any gate reaches this function when the run happens, at whatever distance.";
  "A gate is a reading and a refusal, and the repo keeps them apart on purpose wherever the same reading also has to serve a screen - so the gate holds the refusal and names the reading, and the reading names what it reads. Asking only what the gate itself names therefore answers no about a corpus that is read on every run, which is the shape that was reported as a fault and was never one.";
  "It is asked from the thing being reached rather than swept down from every gate, because the answer is wanted about the few that a cheaper reading has already failed to account for, and walking up from those costs a handful of steps where walking down from every gate costs the whole repo.";
  arguments_assert(arguments, 1);
  let reaching = await function_callers_calling_closure(name);
  let ending = "_gate_run";
  function lambda(one) {
    let ends = text_ends_with(one, ending);
    return ends;
  }
  let gates = list_filter(reaching, lambda);
  let any = list_empty_not_is(gates);
  return any;
}
