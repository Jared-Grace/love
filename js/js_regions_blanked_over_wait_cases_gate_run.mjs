import { arguments_assert } from "./arguments_assert.mjs";
import { js_regions_blanked_over_wait_cases } from "./js_regions_blanked_over_wait_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_regions_blanked_over_wait } from "./js_regions_blanked_over_wait.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_regions_blanked_over_wait_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: the blank-over-a-wait reading finds the three written-out faults and leaves the four deliberate emptyings alone. Throws so the dispatcher seam exits nonzero.");
  ("IT STANDS BESIDE THE SWEEP RATHER THAN INSIDE IT, BECAUSE THE SWEEP CANNOT PROVE ITSELF. The sweep says the repo has none, and a reading that has quietly stopped working says exactly the same thing, in the same word, over the same fourteen thousand functions. This is the half that would go red instead.");
  ("It is the cheap half as well. The sweep opens every function in the repo; this parses seven short ones, so the thing most likely to break is also the thing checked in a moment.");
  let cases = js_regions_blanked_over_wait_cases();
  function answer(one) {
    let code = property_get(one, "code");
    let ast = js_parse(code);
    let regions = js_regions_blanked_over_wait(ast);
    return regions;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "regions",
    "why",
    "js regions blanked over wait",
  );
  return r;
}
