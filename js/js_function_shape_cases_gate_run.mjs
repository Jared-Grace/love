import { js_function_shape_cases } from "./js_function_shape_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_codes_function_shape_same_is } from "./js_codes_function_shape_same_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_function_shape_cases_gate_run() {
  "QA gate: two written-out functions are held to be the same piece of work exactly when the corpus says they are";
  "This is what every duplicate finder in the repo rests on, and it fails quietly in one direction and loudly in the other. Taking away too much only ever makes two things look alike, so the extra pairs it reports read as ordinary noise and every gate stays green - which is how a word used as the key of an entry in an object was being taken away for weeks with nothing to show for it";
  "The corpus carries both answers on purpose. A shaping that took away everything says yes to all seven and fails the four that must differ; one that took away nothing says no to all seven and fails the three that must match. Neither half of the corpus can be dropped and neither half proves anything alone";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_function_shape_cases();
  function answer(c) {
    let one = property_get(c, "one");
    let other = property_get(c, "other");
    let same = js_codes_function_shape_same_is(one, other);
    return same;
  }
  let r = cases_gate_run_generic(cases, answer, "same", "name", "shape");
  return r;
}
