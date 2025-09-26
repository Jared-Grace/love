import { list_map } from "./list_map.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { ebible_references_parse_lines } from "./ebible_references_parse_lines.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { list_map_lower } from "./list_map_lower.mjs";
import { list_filter_empty_not_is } from "./list_filter_empty_not_is.mjs";
import { string_split_space } from "./string_split_space.mjs";
import { whitespace_normalize } from "./whitespace_normalize.mjs";
export async function reply(a) {
  let input = object_property_get(a, "input");
  let language_codes = object_property_get(a, "language_codes");
  let reference = "Isaiah 26:9";
  let b = ["en"];
  let concated = list_concat(language_codes, b);
  let languages = ebible_languages();
  function lambda2(item) {}
  let mapped = list_map(list2, lambda2);
  return list;
  let fn = reply_sequence(["good", "evening"]);
  async function lambda() {
    let list = await ebible_references_parse_lines(concated, [reference]);
  }
  let r = reply_on_match(fn, lambda);
  input = whitespace_normalize(input);
  input = string_split_space(input);
  input = list_filter_empty_not_is(input);
  input = list_map_lower(input);
  let result = r(input);
  return result;
}
