import { list_unique } from "./list_unique.mjs";
import { list_map_split_space } from "./list_map_split_space.mjs";
import { list_map_first } from "./list_map_first.mjs";
import { list_map_split_comma } from "./list_map_split_comma.mjs";
import { text_size_greater_than_1 } from "./text_size_greater_than_1.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export function bible_names_text_parse(text) {
  let split = text_split_newline(text);
  let filtered = list_filter(split, text_size_greater_than_1);
  let mapped3 = list_map_split_comma(filtered);
  let mapped6 = list_map_first(mapped3);
  let mapped = list_map_split_space(mapped6);
  let mapped2 = list_map_first(mapped);
  let unique = list_unique(mapped2);
  return unique;
}
