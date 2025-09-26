import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { list_map } from "./list_map.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
import { marker } from "./marker.mjs";
export function reply(input) {
  input = whitespace_normalize(input);
  input = string_split_space(input);
  let filtered2 = list_filter_empty_not_is(item);
  let mapped = list_map(list, lambda);
  marker("1");
}
