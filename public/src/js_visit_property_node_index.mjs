import { js_visit_property_node } from "../../../love/public/src/js_visit_property_node.mjs";
export function js_visit_property_node_index(ast, inner) {
  let i = 0;
  js_visit_property_node(ast, inner2);
  function inner2(node) {
    inner(node, i);
    i++;
  }
}
