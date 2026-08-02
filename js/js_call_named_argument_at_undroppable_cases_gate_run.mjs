export function js_call_named_argument_at_undroppable_cases_gate_run() {
  "QA gate: each written-down file names exactly the arguments the corpus says could not be dropped.";
  "This reading is the last refusal in front of the repair that takes an unread parameter off a function and off every call site at once. Something it stops seeing is written away in silence, and a call site that meant to do work at that place quietly stops doing it.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_call_named_argument_at_undroppable_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let index = property_get(c, "index");
    let unsafe = js_call_named_argument_at_undroppable(ast, "f", index);
    return unsafe;
  }
  let r = cases_gate_run_generic(cases, answer, "unsafe", "name", "unsafe");
  return r;
}
