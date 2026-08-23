import { js_object_property_text_set_cases } from "./js_object_property_text_set_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_object_property_text_set } from "./js_code_object_property_text_set.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_object_property_text_set_cases_gate_run() {
  "QA gate: the step that puts a new written-out word into a named object property leaves the corpus exactly as the corpus says, and refuses the three things it must refuse.";
  "This step is what a person pressing Save on the review sheet reaches, and what it writes is a file nobody reads afterwards. A write that changed the value and not the printed spelling would leave the file untouched and report that it worked; a write that picked one of two properties with the same name would change the wrong picture's wording. Neither shows up until somebody wonders why a redraw came back the same.";
  "A refusal is caught here and turned into one plain word, so that the corpus can say the step must stop without having to spell out the complaint it stops with. What is being pinned is that nothing was written, which is the part a later reader depends on.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_object_property_text_set_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let key = property_get(c, "key");
    let text = property_get(c, "text");
    try {
      let after = js_code_object_property_text_set(code, key, text);
      return after;
    } catch (refused) {
      let r2 = "refused";
      return r2;
    }
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "after",
    "name",
    "object property text set",
  );
  return r;
}
