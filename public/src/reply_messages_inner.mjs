import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
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
  let result = reply_matches(mapped2);
  let e = list_empty_is(result);
  if (e) {
    result = {
      matches: false,
    };
  } else {
    result = list_first(result);
  }
  return result;
}
