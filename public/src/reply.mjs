import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { reply_on_match } from "../../../love/public/src/reply_on_match.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_references_parse_lines } from "../../../love/public/src/ebible_references_parse_lines.mjs";
import { reply_sequence } from "../../../love/public/src/reply_sequence.mjs";
import { list_map_lower } from "../../../love/public/src/list_map_lower.mjs";
import { list_filter_empty_not_is } from "../../../love/public/src/list_filter_empty_not_is.mjs";
import { string_split_space } from "../../../love/public/src/string_split_space.mjs";
import { whitespace_normalize } from "../../../love/public/src/whitespace_normalize.mjs";
export async function reply(a) {
  let input = object_property_get(a, "input");
  let fn = reply_sequence(["good", "evening"]);
  async function lambda(a) {
    let outputs = object_property_get(a, "outputs");
    list_add(outputs);
    let list = await ebible_references_parse_lines(bible_folders, [reference]);
    let mapped = list_map_property(list, "text");
    list_add_multiple(mapped, items);
    return list;
  }
  let r = reply_on_match(fn, lambda);
  input = whitespace_normalize(input);
  input = string_split_space(input);
  input = list_filter_empty_not_is(input);
  input = list_map_lower(input);
  object_property_set_exists_not(a, "tokens", input);
  await r(a);
}
