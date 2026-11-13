import { arguments_assert } from "./arguments_assert.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { reply_optional } from "./reply_optional.mjs";
export function reply_once_or_more_optional(piece) {
  arguments_assert(arguments, 1);
  ("A piece that may be said any number of times, none at all included.");
  let repeated = reply_once_or_more(piece);
  let optional = reply_optional(repeated);
  return optional;
}
