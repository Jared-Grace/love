import { property_get } from "./property_get.mjs";
import { process_line_sleep_loop_is } from "./process_line_sleep_loop_is.mjs";
import { process_line_sleep_loop_is_cases } from "./process_line_sleep_loop_is_cases.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function process_line_sleep_loop_is_gate_run() {
  "QA gate: a session stopped in a waiting loop is recognised from its command line, and an ordinary run is not";
  "What this protects is the seeing. A loop that waits by sleeping costs no processor time, so it is invisible to every net built to catch work that has run away - and it ends nothing, so it is invisible to whoever wrote it too. It is found by reading command lines or it is not found at all, and until it is found the session behind it is simply gone.";
  "The other direction matters as much. A report that names a healthy run has to be read carefully to be used, and a report that has to be read carefully stops being read.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = process_line_sleep_loop_is_cases();
  function answer(c) {
    let line = property_get(c, "line");
    let sleep_loop = process_line_sleep_loop_is(line);
    return sleep_loop;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "sleep_loop",
    "name",
    "process line sleep loop",
  );
  return r;
}
