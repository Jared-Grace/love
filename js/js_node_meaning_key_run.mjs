import { js_node_meaning_key_terms } from "./js_node_meaning_key_terms.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { list_join } from "./list_join.mjs";
export function js_node_meaning_key_run(node, scales) {
  "What a run of adding and taking away says, or a run of multiplying and dividing, written so that the order the numbers were written in stops counting. 9 - 3 + 2 and 9 + 2 - 3 both come out as run+(+2,+9,-3).";
  "The two runs are the same shape with two different pairs of signs, so one telling apart is all that is asked for: whether this is the multiplying one. Adding is what the run is otherwise, and the sign that leaves a number alone is the one every term is measured from.";
  let straight = js_operator_plus_symbol();
  let opposite = js_operator_minus_symbol();
  if (scales) {
    straight = js_operator_asterisk_symbol();
    opposite = js_operator_division_symbol();
  }
  let terms = js_node_meaning_key_terms(node, straight, opposite);
  let written = list_join(terms, ",");
  let pieces = ["run", straight, "(", written, ")"];
  let key = list_join(pieces, "");
  return key;
}
