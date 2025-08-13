import { object_property_get } from "./object_property_get.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_arrow_blockify(ast) {
  js_visit_type(ast, "ArrowFunctionExpression", function lambda(v) {
    let { node } = v;
    let body = object_property_get(node, "body");
    const type = "BlockStatement";
    let nti = js_node_type_not_is(body, type);
    if (nti) {
      object_replace(body, {
        type: "BlockStatement",
        body: [body],
      });
    }
  });
}
