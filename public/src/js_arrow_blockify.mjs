import { js_node_type_is } from "./js_node_type_is.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_arrow_blockify(ast) {
  js_visit_type(ast, "ArrowFunctionExpression", function lambda(v) {
    let { node } = v;
    object_property_set(node, "type", "FunctionDeclaration");
    let type_is = js_node_type_is(node, "BlockStatement");
    let nti = !type_is;
    if (nti) {
    }
  });
}
