import { list_reverse } from "./list_reverse.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export function text_split_comma_dot_reverse(param_names_comma) {
  let param_names = text_split_comma_dot(param_names_comma);
  list_reverse(param_names);
  return param_names;
}
