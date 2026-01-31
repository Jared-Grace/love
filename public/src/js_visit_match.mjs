import { js_visit_matches } from "../../../love/public/src/js_visit_matches.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function js_visit_match(ast, node_search) {
  let matches = js_visit_matches(node_search, ast);
  let v_match = list_single(matches);
  return v_match;
}
