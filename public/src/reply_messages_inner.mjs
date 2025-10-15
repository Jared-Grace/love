import { string_split_empty } from "../../../love/public/src/string_split_empty.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { reply_matches } from "../../../love/public/src/reply_matches.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { string_lower_to } from "../../../love/public/src/string_lower_to.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
export function reply_messages_inner(message, dictionary, start) {
  let last = reply_last();
  let input = string_lower_to(message);
  log("here");
  let tokens = string_split_empty(input);
  list_add(tokens, last);
  let base = {
    input,
  };
  const possbility_start = {
    tokens,
    outputs: [],
    index: 0,
    matches: true,
  };
  object_merge(possbility_start, base);
  let possibilities = [possbility_start];
  possibilities = start(possibilities);
  let result = reply_matches(possibilities);
  let e = list_empty_is(result);
  if (e) {
    result = {
      matches: false,
    };
    object_merge(result, base);
  } else {
    result = list_first(result);
  }
  return result;
}
