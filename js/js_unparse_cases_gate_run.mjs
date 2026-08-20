import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_unparse_cases } from "./js_unparse_cases.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_unparse_cases_gate_run() {
  "QA gate: a file read in and written straight back out comes back as exactly the text the corpus says, character for character.";
  "Nothing is changed in between on purpose. Every transform ends with this step, so what differs between the text handed in and the text handed back is what the writing decides rather than what any transform did.";
  "The answer is the whole text, so the way a literal was written is compared along with everything else - which is what makes the single-quoted and hex cases say anything.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_unparse_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    let code = js_unparse(ast);
    return code;
  }
  let r = cases_gate_run_generic(cases, answer, "written", "name", "code");
  return r;
}
