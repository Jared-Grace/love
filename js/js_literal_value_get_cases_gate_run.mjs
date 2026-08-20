import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { js_literal_value_get_cases } from "./js_literal_value_get_cases.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
export function js_literal_value_get_cases_gate_run() {
  "QA gate: crossing back out of parsed code into a plain value keeps the value's kind, and stops on parsed code that is holding no value at all, exactly as the corpus says.";
  "The answer is noted as a value or as a stop rather than handed back bare, because the value nothing and a reading that fell over look the same when written bare, and telling those two apart is the whole reason this shape was chosen.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_literal_value_get_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let parsed = js_parse_expression(given);
      let value = js_literal_value_get(parsed);
      let told = {
        value,
      };
      return told;
    } catch (e) {
      let refused = {
        refused: true,
      };
      return refused;
    }
  }
  let r = cases_gate_run_generic(cases, answer, "told", "name", "code");
  return r;
}
