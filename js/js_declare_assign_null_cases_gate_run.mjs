import { property_js_parse } from "./property_js_parse.mjs";
import { js_declare_assign_null_cases } from "./js_declare_assign_null_cases.mjs";
import { js_declare_assign_null } from "./js_declare_assign_null.mjs";
import { js_unparse_parse } from "./js_unparse_parse.mjs";
import { js_declarators_filled_count } from "./js_declarators_filled_count.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_declare_assign_null_cases_gate_run() {
  "QA gate: the step that fills in a missing value fills in exactly the declarations the corpus says, and what it leaves behind still reads back";
  "Written back out and read in again before it is counted, which is the question this is really asking. Counting alone would pass a tree that is perfectly well formed and whose source is an unparseable line - which is the exact failure that put this here, since a value written into the header of a loop that walks an object is both of those at once.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_declare_assign_null_cases();
  function answer(c) {
    let ast = property_js_parse(c, "code");
    js_declare_assign_null(ast);
    let read_back = js_unparse_parse(ast);
    let filled = js_declarators_filled_count(read_back);
    return filled;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "filled",
    "name",
    "declare assign null",
  );
  return r;
}
