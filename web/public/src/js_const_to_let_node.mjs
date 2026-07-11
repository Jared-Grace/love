import { property_transform } from "../../../love/public/src/property_transform.mjs";
import { js_keyword_let } from "../../../love/public/src/js_keyword_let.mjs";
import { js_keyword_const } from "../../../love/public/src/js_keyword_const.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
export function js_const_to_let_node(node) {
  function lambda_kind(kind) {
    let is_const = equal(kind, js_keyword_const());
    if (is_const) {
      let k = js_keyword_let();
      return k;
    }
    return kind;
  }
  property_transform(node, "kind", lambda_kind);
}
