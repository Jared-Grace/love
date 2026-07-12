import { js_statement_call_remove } from "./js_statement_call_remove.mjs";
import { marker } from "./marker.mjs";
export function js_marker_remove(ast) {
  let fn = marker;
  js_statement_call_remove(ast, fn);
}
