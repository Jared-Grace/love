import { js_statement_call_remove } from "../../../love/public/src/js_statement_call_remove.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_marker_remove(ast) {
  marker("1");
  let fn = marker;
  js_statement_call_remove(ast, fn);
}
