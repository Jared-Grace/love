import { js_node_atomize } from "../../../love/public/src/js_node_atomize.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { js_identifiers } from "../../../love/public/src/js_identifiers.mjs";
import { marker_call_replace_generic } from "../../../love/public/src/marker_call_replace_generic.mjs";
export async function marker_call_atomize(input) {
  let v = await marker_call_replace_generic(input, lambda);
  return v;
  async function lambda(a) {
    let { replaced, ast } = a;
    let existing = js_identifiers(ast);
    let v_match = js_visit_match(ast, replaced);
    await js_node_atomize(existing, v_match, js_node_atomize_name(), error());
  }
}
