import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_parse_statement_cases } from "./js_parse_statement_cases.mjs";
import { property_get } from "./property_get.mjs";
export function js_parse_statement_cases_gate_run() {
  "QA gate: a written-out statement is read in as the kind of statement the corpus names, and text holding no statement is refused, exactly as the corpus says.";
  "Only the kind is asked for. What stands inside the statement is a question for the readers above this one, each of which has its own corpus; what this one owes is that the right statement came back at all.";
  "The answer is wrapped so that a refusal cannot be mistaken for the name of a kind - both would otherwise be a word, and the two mean opposite things.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_parse_statement_cases();
  function answer(c) {
    let given = property_get(c, "code");
    try {
      let statement = js_parse_statement(given);
      let kind = js_node_type(statement);
      let told = {
        kind,
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
