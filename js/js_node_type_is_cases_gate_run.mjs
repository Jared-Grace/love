import { cases_gate_run_generic } from "./cases_gate_run_generic.mjs";
import { equal } from "./equal.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { js_node_type_is_cases } from "./js_node_type_is_cases.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_type_is_cases_gate_run() {
  "QA gate: the kind question answers exactly as the corpus says, for parsed code and for the things that are not parsed code at all.";
  "It is asked from a hundred and twenty-four places, nearly all of them about whatever the caller happens to be holding, so answering false rather than stopping is the whole of what makes it askable. The reading keeps that by guarding before it looks, and the guard is one line that reads like it could be folded into the next - it was folded once, the fold put the lookup in front of its own guard, and every canonicalize in the repo stopped until it was put back.";
  "The word each case names is turned into a thing here rather than written into the corpus, because nothing and a piece of parsed code cannot be written down in a list of plain data.";
  "Throws so the dispatcher seam exits nonzero.";
  let cases = js_node_type_is_cases();
  function thing_get(word) {
    let identifier = js_parse_expression("a");
    let wants_nothing = equal(word, "nothing");
    if (wants_nothing) {
      let nothing = null;
      return nothing;
    }
    let wants_word = equal(word, "word");
    if (wants_word) {
      let r2 = "Identifier";
      return r2;
    }
    let wants_number = equal(word, "number");
    if (wants_number) {
      let r3 = 1;
      return r3;
    }
    let wants_list = equal(word, "list");
    if (wants_list) {
      let holding = [identifier];
      return holding;
    }
    let wants_object = equal(word, "object");
    if (wants_object) {
      let kindless = {
        name: "a",
      };
      return kindless;
    }
    return identifier;
  }
  function answer(c) {
    let given = property_get(c, "given");
    let type = property_get(c, "type");
    let thing = thing_get(given);
    let same = js_node_type_is(thing, type);
    return same;
  }
  let r = cases_gate_run_generic(cases, answer, "same", "name", "kind asked");
  return r;
}
