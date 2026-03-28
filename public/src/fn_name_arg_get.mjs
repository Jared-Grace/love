import { js_literal_is_assert } from "../../../love/public/src/js_literal_is_assert.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export function fn_name_arg_get(args, f_name) {
  let first = list_first(args);
  function lambda3() {
    let v = {
      msg: fn_name.name + " first argument should be a literal: " + f_name,
    };
    return v;
  }
  js_literal_is_assert(first, lambda3);
  return first;
}
