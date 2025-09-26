import { list_concat } from "./list_concat.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export async function reply({ input, language_codes }) {
  let reference = "Isaiah 26:9";
  let b = ebible_folder_english();
  let concated = list_concat(language_codes, b);
  let list = await ebible_references_parse_lines(concated, [reference]);
  return list;
  let fn = reply_sequence(["good", "evening"]);
  let r = reply_on_match(fn);
  input = whitespace_normalize(input);
  input = string_split_space(input);
  input = list_filter_empty_not_is(input);
  input = list_map_lower(input);
  let result = r(input);
  return result;
}
