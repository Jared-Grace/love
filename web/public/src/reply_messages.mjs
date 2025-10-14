import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { string_tokens } from "../../../love/public/src/string_tokens.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { reply_dictionary } from "../../../love/public/src/reply_dictionary.mjs";
import { reply_last } from "./reply_last.mjs";
export async function reply_messages(messages, start) {
  let last2 = reply_last();
  let dictionary = await reply_dictionary();
  function lambda(message) {
    let input = string_lower_to(message);
    let tokens_matches = string_tokens(input, dictionary);
    function lambda3(tokens) {
      list_add(tokens, last);
    }
    each(tokens_matches, lambda3);
    let result = {
      input,
      success: false,
    };
    function lambda2(tokens) {
      marker("1");
      const possbilitiy_start = {
        tokens,
        outputs: [],
        index: 0,
        matches: true,
      };
      object_merge(possbilitiy_start, result);
      let possibilities = [possbilitiy_start];
      possibilities = start(possibilities);
      return possibilities;
    }
    let mapped2 = list_map_squash(tokens_matches, lambda2);
    let filtered = list_filter_property(mapped2, "success", true);
    let ne = list_empty_not_is(filtered);
    if (ne) {
      result = list_first(filtered);
    }
    return result;
  }
  let result = list_map(messages, lambda);
  return result;
}
