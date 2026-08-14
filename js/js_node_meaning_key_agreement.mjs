import { js_node_meaning_key_agreement_parts } from "./js_node_meaning_key_agreement_parts.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ternary } from "./ternary.mjs";
export function js_node_meaning_key_agreement(node) {
  "What a sameness sign says, written out so that one statement signed two different ways comes out as one key: the sameness being asked about, with a not in front of it when the line answers it back to front.";
  "The denials are counted rather than left where they were written, because moving a denial from a side onto the sign between the sides changes nothing about what is said. (3 !== 2) !== (8 === 6) and (8 !== 6) === (2 !== 3) hold two denials each and so both come out plain, while (3 !== 2) === (8 === 6) holds one and comes out denied - which is the answer, because that line is the other line's opposite.";
  let parts = js_node_meaning_key_agreement_parts(node);
  let base = property_get(parts, "base");
  let denied = property_get(parts, "denied");
  let bang = js_operator_bang_symbol();
  let empty = "";
  let mark = ternary(denied, bang, empty);
  let key = text_combine_multiple([mark, base]);
  return key;
}
