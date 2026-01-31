import { marker } from "../../../love/public/src/marker.mjs";
import { js_visit_matches } from "../../../love/public/src/js_visit_matches.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
export function js_visit_match_first(ast, node_search) {
  marker("1");
  let matches = js_visit_matches(ast, node_search);
  let v_match = list_single(matches);
  return v_match;
}
