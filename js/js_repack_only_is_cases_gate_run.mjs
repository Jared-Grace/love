import { arguments_assert } from "./arguments_assert.mjs";
import { js_repack_only_is_cases } from "./js_repack_only_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_repack_only_is } from "./js_repack_only_is.mjs";
import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
export function js_repack_only_is_cases_gate_run() {
  "QA gate: the reading of a function whose whole product is a record it took apart and put back together must answer every written-out function the way that function says. The sweep built on it walks the whole repo and reports names, so a reading that had stopped saying yes would report a clean repo it never really looked at, and a reading that had started saying yes to everything would be held off only by a record of names nobody would think to doubt.";
  "Throws so the dispatcher seam exits nonzero.";
  arguments_assert(arguments, 0);
  let cases = js_repack_only_is_cases();
  function answer(c) {
    let code = property_get(c, "code");
    let declaration = js_parse_statement(code);
    let repack_is = js_repack_only_is(declaration);
    return repack_is;
  }
  let r = cases_gate_run_generic(
    cases,
    answer,
    "repack_is",
    "why",
    "js repack only is",
  );
  return r;
}
