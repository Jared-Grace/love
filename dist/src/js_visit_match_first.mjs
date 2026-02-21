import { list_first } from "../../../love/public/src/list_first.mjs";
import { js_visit_matches } from "../../../love/public/src/js_visit_matches.mjs";
export function js_visit_match_first(ast, node_search) {
  let matches = js_visit_matches(ast, node_search);
  let v_match = list_first(matches);
  return v_match;
}
