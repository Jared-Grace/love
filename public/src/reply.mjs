import { reply_on_match } from "./reply_on_match.mjs";
import { ebible_languages_to_bible_folders } from "./ebible_languages_to_bible_folders.mjs";
import { log } from "./log.mjs";
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
  log({
    concated,
  });
  let bible_folders = ebible_languages_to_bible_folders(concated);
  let fn = reply_sequence(["good", "evening"]);
  async function lambda() {
    let list = await ebible_references_parse_lines(bible_folders, [reference]);
    return list;
  }
  let r = reply_on_match(fn, lambda);
  input = whitespace_normalize(input);
  input = string_split_space(input);
  input = list_filter_empty_not_is(input);
  input = list_map_lower(input);
  let result = r(a);
  return result;
}
