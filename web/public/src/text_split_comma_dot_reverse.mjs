import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
export function text_split_comma_dot_reverse(param_names_comma) {
  let param_names = text_split_comma_dot(param_names_comma);
  list_reverse(param_names);
  return param_names;
}
