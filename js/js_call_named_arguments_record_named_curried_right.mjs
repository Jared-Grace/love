import { js_call_named_arguments_record_named } from "./js_call_named_arguments_record_named.mjs";
export function js_call_named_arguments_record_named_curried_right(
  f_name,
  names,
  chosen,
) {
  let r2 = function js_call_named_arguments_record_named_curried_right_result(
    ast,
  ) {
    let r = js_call_named_arguments_record_named(ast, f_name, names, chosen);
    return r;
  };
  return r2;
}
