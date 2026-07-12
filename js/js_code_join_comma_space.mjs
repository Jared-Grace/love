import { js_code_comma } from "./js_code_comma.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine_space_right } from "./text_combine_space_right.mjs";
export function js_code_join_comma_space(args) {
  let t = js_code_comma();
  let separator = text_combine_space_right(t);
  let v = list_join(args, separator);
  return v;
}
