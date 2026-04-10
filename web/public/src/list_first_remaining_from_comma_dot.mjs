import { list_first_remaining } from "../../../love/public/src/list_first_remaining.mjs";
import { text_split_comma_dot } from "../../../love/public/src/text_split_comma_dot.mjs";
export function list_first_remaining_from_comma_dot(
  f_name_transformer_args_comma,
) {
  let split = text_split_comma_dot(f_name_transformer_args_comma);
  let fr = list_first_remaining(split);
  return fr;
}
