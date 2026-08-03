export function qa_app_gates_sorted_gate_run() {
  "Gate: each written-down set of red gates must be sorted into exactly the holding and the set-aside the corpus says. Throws so the dispatcher seam exits nonzero.";
  "This is the judgement one app's deployment turns on, and both ways of being wrong are silent. Set a gate aside that could reach the app and a break ships; hold one that could not and a ready deploy waits on work that could never have touched it. Neither looks any different from working.";
  "Everything it needs is written down, so this asks its question in a moment. Reaching the same judgement through its caller means judging a commit first, which is fourteen minutes - which is why every fault found in it so far was found by hand on a real afternoon instead.";
  let cases = qa_app_gates_sorted_cases();
  function answer(c) {
    let failed = property_get(c, "failed");
    let named = property_get(c, "named");
    let reach = property_get(c, "reach");
    let sorted = qa_app_gates_sorted(failed, named, reach);
    return sorted;
  }
  let r = cases_gate_run_generic(cases, answer, "sorted", "why", "qa app gates sorted");
  return r;
}
