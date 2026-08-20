import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_names_gate_advice_generic } from "./baseline_names_gate_advice_generic.mjs";
import { property_get } from "./property_get.mjs";
export async function baseline_names_gate_walked_advice_generic(
  walked,
  offenders,
  path,
  hint_get,
  name_write,
) {
  arguments_assert(arguments, 5);
  ("Measure a sweep's offenders against its record, working the advice out from the names that newly offend, and hand back the verdict with how much the sweep reached still attached.");
  ("It is the second of the two ratchets given a count, and it needed its own name rather than an argument because the pair differ in what they are handed: one carries the sentence, the other carries a way of making it. Folding them together would have meant a parameter that is sometimes a sentence and sometimes a function, which is the shape that makes a caller read the callee before it can call it.");
  ("The count is asked for rather than worked out here, for the reason its plainer twin gives at length: everything this could count for itself stays the same on exactly the run where the sweep has gone quiet.");
  let told = await baseline_names_gate_advice_generic(
    offenders,
    path,
    hint_get,
    name_write,
  );
  let added = property_get(told, "added");
  let stale = property_get(told, "stale");
  let r = {
    walked,
    added,
    stale,
  };
  return r;
}
