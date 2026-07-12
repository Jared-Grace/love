import { text_comma_space } from "./text_comma_space.mjs";
import { list_join } from "./list_join.mjs";
export function list_join_comma_space(list) {
  let separator = text_comma_space();
  let joined = list_join(list, separator);
  return joined;
}
