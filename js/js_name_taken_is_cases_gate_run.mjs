import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_name_taken_is_cases } from "./js_name_taken_is_cases.mjs";
import { js_name_taken_is } from "./js_name_taken_is.mjs";
import { js_parse } from "./js_parse.mjs";
import { property_get } from "./property_get.mjs";
export function js_name_taken_is_cases_gate_run() {
  "QA gate: the question a rename asks before handing a file a name answers the corpus exactly as the corpus says.";
  "This is the same reading of what a file binds, asked one step further out, and it is here as well because a corpus on the reading alone proves only that the reading is right - not that the caller is still asking it. The bug this guards has already been paid for once: a rename that checked what the file reads but not what the file declares landed on a word an inner scope had declared, and the file it wrote called a value as though it were code.";
  "Throws so the dispatcher exits nonzero.";
  let cases = js_name_taken_is_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let asked = property_get(c, "asked");
    let ast = js_parse(code);
    let taken = js_name_taken_is(ast, asked);
    return taken;
  }
  let r = cases_gate_run_generic(cases, answer, "taken", "name", "name taken");
  return r;
}
