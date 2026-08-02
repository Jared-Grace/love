export function js_name_value_use_nodes_cases_gate_run() {
  "QA gate: each written-down file hands the name over as a value exactly as many times as the corpus says.";
  "This reading is one of the three refusals in front of the repair that takes an unread parameter off a function and off every call site at once. A handing-over it stops seeing is written away in silence, and whoever calls the function afterwards hands its arguments to the wrong parameters.";
  "The count is what is compared rather than the places themselves, because every one of them is the same name written out and so unparses to the same word.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_name_value_use_nodes_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let nodes = js_name_value_use_nodes(ast, "f");
    return nodes.length;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "value_uses",
    "name",
    "value uses",
  );
  return r;
}
