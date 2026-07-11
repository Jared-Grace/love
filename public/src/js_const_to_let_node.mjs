import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { change_if_equal } from "../../../love/public/src/change_if_equal.mjs";
export function js_const_to_let_node(node) {
  let from2 = js_keyword_const();
  let to = js_keyword_let();
  function lambda_kind(kind) {
    let result = change_if_equal(kind, from2, to);
    return result;
  }
  property_transform(node, "kind", lambda_kind);
}
