import { js_literal_is_assert_json } from "./js_literal_is_assert_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_first } from "./list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function fn_name_arg_get(args, f_name) {
  let first = list_first(args);
  function lambda() {
    let v = {
      msg: text_combine_multiple([
        fn_name.name,
        " first argument should be a literal: ",
        f_name,
      ]),
    };
    return v;
  }
  js_literal_is_assert_json(first, lambda);
  return first;
}
