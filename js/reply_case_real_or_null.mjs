import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_get } from "./property_get.mjs";
export function reply_case_real_or_null(by_key, from) {
  arguments_assert(arguments, 2);
  ("The real message one written-down case was drawn from, together with what the rules say back to it today - or nothing, when the case stands for no message anybody sent.");
  ("★ A CASE WITH NOTHING BEHIND IT IS ORDINARY AND NOT A FAULT. Some cases are written to pin down a message that has not arrived yet, or a shape somebody might send; those carry no key, and answering nothing is the honest answer for them. It is worth telling apart from the other kind of nothing - a case whose key names a message this machine has not brought down - and both are answered the same way here because a screen can only say so much, and neither means the case is wrong.");
  ("What is handed back is only the few things a reader wants beside a case. The record itself carries where it came from and how it was stored, and none of that helps anybody decide whether a rewritten message still stands for a real one.");
  let missing = text_empty_is(from);
  if (missing) {
    return null;
  }
  let record = property_get_or_null(by_key, from);
  if (not(record)) {
    return null;
  }
  let attempt = property_get(record, "reply");
  let real = {
    message: property_get(record, "message"),
    who: property_get(record, "who"),
    when: property_get(record, "when"),
    answered: property_get(attempt, "answered"),
    outputs: property_get(attempt, "outputs"),
    broke: property_get(attempt, "broke"),
  };
  return real;
}
