import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { list_map_split_space } from "../../../love/public/src/list_map_split_space.mjs";
import { list_map_first } from "../../../love/public/src/list_map_first.mjs";
import { list_map_split_comma } from "../../../love/public/src/list_map_split_comma.mjs";
import { string_size_greater_than_1 } from "../../../love/public/src/string_size_greater_than_1.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { string_split_newline } from "../../../love/public/src/string_split_newline.mjs";
export function bible_names_text_parse(text) {
  let split = string_split_newline(text);
  let filtered2 = list_filter(split, string_size_greater_than_1);
  let mapped3 = list_map_split_comma(filtered2);
  let mapped6 = list_map_first(mapped3);
  let mapped = list_map_split_space(mapped6);
  let mapped2 = list_map_first(mapped);
  let unique = list_unique(list);
  return mapped2;
}
