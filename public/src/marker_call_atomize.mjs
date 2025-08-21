import { js_node_atomize } from "./js_node_atomize.mjs";
import { js_visit_match } from "./js_visit_match.mjs";
import { js_identifiers } from "./js_identifiers.mjs";
import { marker_call_replace_generic } from "./marker_call_replace_generic.mjs";
export async function marker_call_atomize(input) {
  let v = await marker_call_replace_generic(input, lambda);
  return v;
  async function lambda(a) {
    let { replaced, ast } = a;
    let existing = js_identifiers(ast);
    let v_match = js_visit_match(ast, replaced);
    await js_node_atomize(existing, v_match);
  }
}
