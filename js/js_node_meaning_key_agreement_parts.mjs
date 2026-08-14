import { js_equality_operators } from "./js_equality_operators.mjs";
import { js_node_meaning_key } from "./js_node_meaning_key.mjs";
import { js_node_meaning_key_from_parts } from "./js_node_meaning_key_from_parts.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { js_operator_equality_positive } from "./js_operator_equality_positive.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get } from "./property_get.mjs";
export function js_node_meaning_key_agreement_parts(node) {
  "What a sameness sign asks, split into the question and whether the question is denied: the base is the sameness being asked about, and denied says whether the line answers it back to front.";
  "Splitting them is what recognises one statement written two ways. Denying a side and denying the sign between the sides cancel each other out, so (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) ask the same two sameness questions and deny the pair an even number of times each - one line has the denials on a side and the sign, the other has them on both sides. Counted rather than placed, the two come out as one.";
  "Anything that is not a sameness sign has nothing to deny, so it stands for itself and is not denied. That is what keeps a plus or a less-than out of this: it is the sameness sign alone whose denial is exactly its opposite.";
  let type = js_node_type(node);
  let binary = list_includes(["BinaryExpression", "LogicalExpression"], type);
  if (binary) {
    let operator = property_get(node, "operator");
    let equalities = js_equality_operators();
    let sameness = list_includes(equalities, operator);
    if (sameness) {
      let positive = js_operator_equality_positive(operator);
      let denied_here = equal_not(positive, operator);
      let left = property_get(node, "left");
      let right = property_get(node, "right");
      let left_parts = js_node_meaning_key_agreement_parts(left);
      let right_parts = js_node_meaning_key_agreement_parts(right);
      let left_base = property_get(left_parts, "base");
      let right_base = property_get(right_parts, "base");
      let left_denied = property_get(left_parts, "denied");
      let right_denied = property_get(right_parts, "denied");
      let sides = [left_base, right_base];
      let settle = true;
      let base = js_node_meaning_key_from_parts(positive, sides, settle);
      let sides_denied = equal_not(left_denied, right_denied);
      let denied = equal_not(sides_denied, denied_here);
      let parts = {
        base,
        denied,
      };
      return parts;
    }
  }
  let plain = js_node_meaning_key(node);
  let plain_parts = {
    base: plain,
    denied: false,
  };
  return plain_parts;
}
