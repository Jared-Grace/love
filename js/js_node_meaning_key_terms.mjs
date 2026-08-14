import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { js_node_meaning_key } from "./js_node_meaning_key.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_meaning_key_terms(node, straight, opposite) {
  "Every number in a run of adding and taking away, or of multiplying and dividing, written out one to a term with the sign that stands in front of it, and then put in a settled order. 9 - 3 + 2 gives +2, +9, -3, and so does 9 + 2 - 3, which is how the two are known to be the same sum.";
  "The run is walked rather than read off the two sides, because a line writes a run of three as one sign holding another. Going right past a taking-away sign turns everything after it round, which is what keeps 11 - 2 - 3 apart from 11 - 3 - 2 while joining it to 11 - 3 - 2 written the other way about.";
  "Sorting at the end is what makes the order stop counting. Anything that is not part of the run - a call, a name, a whole line of its own - is asked what it says by itself and stands in the list as one term.";
  let terms = [];
  function gather(piece, facing) {
    let piece_type = js_node_type(piece);
    let piece_binary = equal(piece_type, "BinaryExpression");
    let inward = false;
    let turned = false;
    if (piece_binary) {
      let piece_operator = property_get(piece, "operator");
      let onward = equal(piece_operator, straight);
      turned = equal(piece_operator, opposite);
      inward = onward || turned;
    }
    if (inward) {
      let piece_left = property_get(piece, "left");
      let piece_right = property_get(piece, "right");
      gather(piece_left, facing);
      let facing_after = facing;
      if (turned) {
        let flipped = equal(facing, straight);
        facing_after = straight;
        if (flipped) {
          facing_after = opposite;
        }
      }
      gather(piece_right, facing_after);
    }
    if (not(inward)) {
      let inside = js_node_meaning_key(piece);
      let parts = [facing, inside];
      let term = list_join(parts, "");
      list_add(terms, term);
    }
  }
  gather(node, straight);
  list_sort_text(terms);
  return terms;
}
