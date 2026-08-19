import { arguments_assert } from "./arguments_assert.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_statements_grouping_worthless_cases } from "./js_statements_grouping_worthless_cases.mjs";
import { js_statements_grouping_worthless_is } from "./js_statements_grouping_worthless_is.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
export function js_statements_grouping_worthless_cases_gate_run() {
  "QA gate: the judgment that decides whether a run of lines would be worth acting on answers the corpus exactly the way the corpus says.";
  "It is asked at the shape level, before a group is ever formed, so a refusal that reaches one line too wide does not report a wrong finding - it takes the finding away, and the reading comes back empty and green. Nothing else in the repo can tell that apart from a reading that found nothing to complain about.";
  "Each case is written as a whole function and the lines are taken out of its body, because a return cannot be written outside a function at all and the returns are half of what is being pinned.";
  "Throws so the dispatcher exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_statements_grouping_worthless_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let ast = js_parse(code);
    let program = property_get(ast, "body");
    let declaration = list_get(program, 0);
    let block = property_get(declaration, "body");
    let statements = property_get(block, "body");
    let worthless = js_statements_grouping_worthless_is(statements);
    return worthless;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "worthless",
    "name",
    "grouping worthless",
  );
  return r;
}
