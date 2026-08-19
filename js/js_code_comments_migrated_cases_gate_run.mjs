import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_code_comments_migrated_cases } from "./js_code_comments_migrated_cases.mjs";
import { js_code_comments_migrated } from "./js_code_comments_migrated.mjs";
import { property_get } from "./property_get.mjs";
export function js_code_comments_migrated_cases_gate_run() {
  "QA gate: turning a file's comments into statements answers the corpus exactly as the corpus says.";
  "This is the reading of what a file binds for itself, asked at the far end of the pipeline where it decides what a word in a sentence means. A word the file caught for itself must stay a word; when the reading missed caught names it became a live reference to a function the line never calls, and the file still parsed, still ran, and no gate said anything.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_code_comments_migrated_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let f_names = property_get(c, "f_names");
    let migrated = js_code_comments_migrated(code, f_names);
    return migrated;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "migrated",
    "name",
    "comments migrated",
  );
  return r;
}
