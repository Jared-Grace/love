import { js_imports_relative_paths_cases } from "./js_imports_relative_paths_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_imports_relative_paths } from "./js_imports_relative_paths.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_imports_relative_paths_cases_gate_run() {
  "QA gate: each small file written down in the corpus names the places that corpus says it names";
  "This is the reading the dangling-import sweep rests on. If it stopped seeing dotted imports the sweep would find nothing missing and report a repo whose every import leads somewhere - a total failure wearing the shape of a clean bill of health.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_imports_relative_paths_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let paths = js_imports_relative_paths(ast);
    return paths;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "paths",
    "name",
    "relative import paths",
  );
  return r;
}
