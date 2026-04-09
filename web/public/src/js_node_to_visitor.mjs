import { js_visit_matches } from "../../../love/public/src/js_visit_matches.mjs";
export function js_node_to_visitor(ast, node_search) {
  let matches = js_visit_matches(ast, node_search);
  let v_match = list_fsingle(matches);
  return v_match;
}
