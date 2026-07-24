import { property_get } from "./property_get.mjs";
import { js_node_atomize_name } from "./js_node_atomize_name.mjs";
import { js_node_atomize } from "./js_node_atomize.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { marker_call_replace_generic } from "./marker_call_replace_generic.mjs";
export async function marker_call_atomize(input) {
  let v = await marker_call_replace_generic(input, lambda);
  return v;
  async function lambda(a) {
    let ast = property_get(a, "ast");
    let replaced = property_get(a, "replaced");
    let v_match = js_node_to_visitor(ast, replaced);
    let variable_name = js_node_atomize_name();
    await js_node_atomize(ast, v_match, variable_name, 0);
  }
}
