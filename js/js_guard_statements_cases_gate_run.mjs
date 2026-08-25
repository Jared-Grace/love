import { property_path_get_2 } from "./property_path_get_2.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { js_guard_statements_cases } from "./js_guard_statements_cases.mjs";
import { property_get } from "./property_get.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { js_guard_statements } from "./js_guard_statements.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_guard_statements_cases_gate_run() {
  "QA gate: every four names written down in the corpus build the guard that corpus says they build, and every four holding something that is not a name are refused";
  "What comes back is read out of the tree rather than off the printed line, so a change in how the printer spaces things cannot turn this red, and a call sitting in a slot where a name belongs cannot hide behind a line that still reads well.";
  "Throws so the dispatcher seam exits nonzero";
  let cases = js_guard_statements_cases();
  function answer(c) {
    let test_fn_name = property_get(c, "test_fn_name");
    let tested_name = property_get(c, "tested_name");
    let bound_name = property_get(c, "bound_name");
    let returned_name = property_get(c, "returned_name");
    function lambda() {
      let made = js_guard_statements(
        test_fn_name,
        tested_name,
        bound_name,
        returned_name,
      );
      return made;
    }
    let statements = catch_null(lambda);
    let refused_is = null_is(statements);
    if (refused_is) {
      return null;
    }
    let binding = list_first(statements);
    let guard = list_get(statements, 1);
    let declarator = property_list_first(binding, "declarations");
    let bound = property_path_get_2(declarator, "id", "name");
    let source = property_get(declarator, "init");
    let callee = property_get(source, "callee");
    let test_fn = property_get(callee, "name");
    let argument = property_list_first(source, "arguments");
    let tested = property_get(argument, "name");
    let test = property_get(guard, "test");
    let guarded = property_get(test, "name");
    let block = property_get(guard, "consequent");
    let statement = property_list_first(block, "body");
    let handed = property_get(statement, "argument");
    let returned = js_unparse(handed);
    let built = {
      bound,
      test_fn,
      tested,
      guarded,
      returned,
    };
    return built;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "built",
    "name",
    "guard statements",
  );
  return r;
}
