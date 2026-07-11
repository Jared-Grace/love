import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { change_if_equal } from "../../../love/public/src/change_if_equal.mjs";
export function js_const_to_let_node(node) {
  function lambda_kind(kind) {
    return change_if_equal(kind, js_keyword_const(), js_keyword_let());
    
  }
  property_transform(node, "kind", lambda_kind);
}
