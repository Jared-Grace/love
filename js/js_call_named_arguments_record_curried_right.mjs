import { js_call_named_arguments_record } from "./js_call_named_arguments_record.mjs";
export function js_call_named_arguments_record_curried_right(f_name, names) {
  let r2 = function js_call_named_arguments_record_curried_right_result(ast) {
    let r = js_call_named_arguments_record(ast, f_name, names);
    return r;
  };
  return r2;
}
