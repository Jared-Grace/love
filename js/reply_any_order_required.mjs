import { arguments_assert } from "./arguments_assert.mjs";
import { reply_once_or_more_optional } from "./reply_once_or_more_optional.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export function reply_any_order_required(required, optional) {
  arguments_assert(arguments, 2);
  ("Two pieces said any number of times in any order, so long as the required one is said at least once.");
  ("★ THE OPTIONAL PIECE NEVER STANDS ALONE. Any order with one required is the same as: optional ones, then the first required one, then any mix of both - so a message of optional pieces only reaches no required one and matches nothing.");
  let before = reply_once_or_more_optional(optional);
  let either = reply_choice([required, optional]);
  let after = reply_once_or_more_optional(either);
  let mixed = reply_sequence([before, required, after]);
  return mixed;
}
