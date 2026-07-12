import { property_transform } from "./property_transform.mjs";
import { js_keyword_let } from "./js_keyword_let.mjs";
import { js_keyword_const } from "./js_keyword_const.mjs";
import { change_if_equal } from "./change_if_equal.mjs";
export function js_const_to_let_node(node) {
  function lambda_kind(kind) {
    let from2 = js_keyword_const();
    let to = js_keyword_let();
    let result = change_if_equal(kind, from2, to);
    return result;
  }
  property_transform(node, "kind", lambda_kind);
}
