import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_flo_body } from "./js_flo_body.mjs";
import { js_flo_body_cases } from "./js_flo_body_cases.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_map } from "./list_map.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
export function js_flo_body_cases_gate_run() {
  "QA gate: the statements standing directly inside the one function a module hands out come back by kind, in order, exactly as the corpus says - and the modules with no such function are stopped on rather than answered about.";
  "Almost every look at what a function does starts here, and it is two readings joined: find what the module hands out, then take the block inside it. The half above answers about a value or a class as readily as a function; this one cannot, so the two accept different modules, and the corpus is where that difference is written down.";
  "Each statement is named by its kind, which is what makes the answer say the right block was reached without saying anything about what is nested further down.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_flo_body_cases();
  function answer(c) {
    try {
      let ast = property_js_parse(c, "code");
      let statements = js_flo_body(ast);
      let kinds = list_map(statements, js_node_type);
      return kinds;
    } catch (e) {
      let refused = "refused";
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "statements", "name", "module");
  return r;
}
