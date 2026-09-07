import { reply_last } from "./reply_last.mjs";
import { reply_messages_inner_transform } from "./reply_messages_inner_transform.mjs";
import { list_add } from "./list_add.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { property_set } from "./property_set.mjs";
import { reply_property_codes } from "./reply_property_codes.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
export async function reply_messages_inner(message, start) {
  "Run the reply rules over one message and hand back the best reading of it.";
  "★ EVERY PLACE A RULE APPENDS TO IS LAID OUT EMPTY HERE FIRST, and the names come from the same two functions the rules append through. A rule that appended to a place nobody had laid out threw instead of replying, and the message it threw on sat in the app saying Loading for good; a rule can only append to a list that is already there.";
  let last = reply_last();
  let tokens = reply_messages_inner_transform(message);
  list_add(tokens, last);
  let base = {
    message,
  };
  let possbility_start = {
    tokens,
    index: 0,
    matches: true,
  };
  object_merge_set(possbility_start, base);
  let name_outputs = reply_property_outputs();
  property_set(possbility_start, name_outputs, []);
  let name_codes = reply_property_codes();
  property_set(possbility_start, name_codes, []);
  let possibilities = [possbility_start];
  possibilities = await start(possibilities);
  let result = reply_matches(possibilities);
  let e = list_empty_is(result);
  if (e) {
    result = {
      matches: false,
    };
    object_merge_set(result, base);
  } else {
    result = list_first(result);
  }
  return result;
}
