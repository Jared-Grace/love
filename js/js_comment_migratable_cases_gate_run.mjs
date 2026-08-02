import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_comment_migratable_cases } from "./js_comment_migratable_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { list_single } from "./list_single.mjs";
import { js_comment_migratable_is } from "./js_comment_migratable_is.mjs";
export function js_comment_migratable_cases_gate_run() {
  "QA gate: each comment written down in the corpus is judged the way that corpus says. Nothing in the repo carries a comment today - two other gates see to that - so the reader this checks has nothing live to work on, and a reader that had quietly stopped answering would look exactly like a clean repo. Only a written-down case can tell those apart. Throws so the dispatcher seam exits nonzero.";
  let cases = js_comment_migratable_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let comments = js_comments_get(code);
    let comment = list_single(comments);
    let migratable = js_comment_migratable_is(code, ast, comment);
    return migratable;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "migratable",
    "why",
    "comment migratable",
  );
  return r;
}
