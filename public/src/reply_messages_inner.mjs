import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_map_squash } from "../../../love/public/src/list_map_squash.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { string_tokens } from "../../../love/public/src/string_tokens.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
export function reply_messages_inner(message, dictionary, start) {
  let last = reply_last();
  let input = string_lower_to(message);
  let tokens_matches = string_tokens(input, dictionary);
  function lambda3(tokens) {
    list_add(tokens, last);
  }
  each(tokens_matches, lambda3);
  let base = {
    input,
  };
  function lambda2(tokens) {
    const possbility_start = {
      tokens,
      outputs: [],
      index: 0,
      matches: true,
    };
    object_merge(possbility_start, base);
    let possibilities = [possbility_start];
    possibilities = start(possibilities);
    return possibilities;
  }
  let mapped2 = list_map_squash(tokens_matches, lambda2);
  let result = list_filter_property(mapped2, "matches", true);
  let ne = list_empty_not_is(result);
  if (ne) {
    result = list_first(result);
  }
  return result;
}
