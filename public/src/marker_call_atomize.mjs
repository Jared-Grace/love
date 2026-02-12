import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_node_atomize_name } from "../../../love/public/src/js_node_atomize_name.mjs";
import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { js_identifiers } from "../../../love/public/src/js_identifiers.mjs";
import { marker_call_replace_generic } from "../../../love/public/src/marker_call_replace_generic.mjs";
export async function marker_call_atomize(input) {
  let v = await marker_call_replace_generic(input, lambda);
  return v;
  async function lambda(a) {
    let ast = property_get(a, "ast");
    let replaced = property_get(a, "replaced");
    let existing = js_identifiers(ast);
    let v_match = js_visit_match(ast, replaced);
    let variable_name = js_node_atomize_name();
    await js_node_atomize(existing, v_match, variable_name, 0);
  }
}
