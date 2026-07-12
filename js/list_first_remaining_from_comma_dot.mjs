import { list_first_remaining } from "./list_first_remaining.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
export function list_first_remaining_from_comma_dot(args_comma_dot) {
  let split = text_split_comma_dot(args_comma_dot);
  let fr = list_first_remaining(split);
  return fr;
}
