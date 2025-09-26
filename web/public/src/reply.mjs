import { string_lower_to } from "./string_lower_to.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export function reply(input) {
  input = whitespace_normalize(input);
  input = list_map(list, string_lower_to);
  input = string_split_space(input);
  input = list_filter_empty_not_is(input);
  return input;
}
