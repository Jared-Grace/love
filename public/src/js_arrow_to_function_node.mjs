import { property_set } from "../../../love/public/src/property_set.mjs";
export function js_arrow_to_function_node(node) {
  const type = "FunctionExpression";
  property_set(node, "type", type);
}
