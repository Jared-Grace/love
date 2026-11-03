import { reply_last } from "./reply_last.mjs";
import { reply_messages_inner_transform } from "./reply_messages_inner_transform.mjs";
import { list_add } from "./list_add.mjs";
import { reply_property_outputs } from "./reply_property_outputs.mjs";
import { reply_property_codes } from "./reply_property_codes.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { property_set } from "./property_set.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { reply_cheapest } from "./reply_cheapest.mjs";
export async function reply_messages_inner(message, start) {
  "Run the reply rules over one message and hand back the best reading of it.";
  "★ EVERY PLACE A RULE APPENDS TO IS LAID OUT EMPTY HERE FIRST, and the names come from the same two functions the rules append through. A rule that appended to a place nobody had laid out threw instead of replying, and the message it threw on sat in the app saying Loading for good; a rule can only append to a list that is already there.";
  let last = reply_last();
  let tokens = reply_messages_inner_transform(message);
  list_add(tokens, last);
  let base = {
    message,
  };
  let name_outputs = reply_property_outputs();
  let name_codes = reply_property_codes();
  async function readings(exact_only) {
    let possbility_start = {
      tokens,
      index: 0,
      matches: true,
      cost: 0,
      exact_only,
    };
    object_merge_set(possbility_start, base);
    property_set(possbility_start, name_outputs, []);
    property_set(possbility_start, name_codes, []);
    let possibilities = await start([possbility_start]);
    let matched = reply_matches(possibilities);
    return matched;
  }
  ("★ THE MESSAGE IS READ WITH NO TYPOS ALLOWED FIRST, AND ONLY READ AGAIN WITH THEM IF THAT FAILS. A reading with no typos already beat every reading with one, so when one exists the second read could not have changed the winner, and most of the work of a read is in trying the typos.");
  let result = await readings(true);
  let exact_none = list_empty_is(result);
  if (exact_none) {
    result = await readings(false);
  }
  let e = list_empty_is(result);
  if (e) {
    result = {
      matches: false,
    };
    object_merge_set(result, base);
  } else {
    result = reply_cheapest(result);
  }
  return result;
}
