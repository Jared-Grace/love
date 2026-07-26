import { js_statement_call_any_get } from "./js_statement_call_any_get.mjs";
import { null_is } from "./null_is.mjs";
import { js_call_callee_name_try } from "./js_call_callee_name_try.mjs";
import { markers_names } from "./markers_names.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_function_marker_call_is(statement) {
  "Whether a statement is one of the marks a body can carry rather than a piece of the work it does.";
  let call = js_statement_call_any_get(statement);
  let missing = null_is(call);
  if (missing) {
    return false;
  }
  let name = js_call_callee_name_try(call);
  let markers = markers_names();
  let marker_is = list_includes(markers, name);
  return marker_is;
}
