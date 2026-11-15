import { json_copy } from "./json_copy.mjs";
import { reply_wrap_invoke } from "./reply_wrap_invoke.mjs";
import { reply_matches } from "./reply_matches.mjs";
import { not } from "./not.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function reply_otherwise(first, second) {
  "A rule that reads what the first rule reads, and only when the first reads nothing at all, what the second reads instead.";
  "★ THE SECOND IS NEVER EVEN STARTED WHILE THE FIRST READS SOMETHING. That is the whole reason to have this rather than a choice between the two: a choice runs both every time, and the second may be dear - it may download a word list - so a message the first can read never pays for the second.";
  "The first is handed a copy, because a rule may change the readings it is given, and the second must start from the message as it stood.";
  let fn = async function reply_otherwise_matches(possibilities) {
    let copy = json_copy(possibilities);
    let read = await reply_wrap_invoke(first, copy);
    let matched = reply_matches(read);
    let b = list_empty_is(matched);
    if (not(b)) {
      return matched;
    }
    let second_read = await reply_wrap_invoke(second, possibilities);
    let second_matched = reply_matches(second_read);
    return second_matched;
  };
  return fn;
}
