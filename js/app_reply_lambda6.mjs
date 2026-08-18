import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { equal } from "./equal.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { text_take_less_1 } from "./text_take_less_1.mjs";
import { text_alphabet_includes } from "./text_alphabet_includes.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_reply_lambda6(
  event,
  typed,
  visible_count,
  buttons_refresh,
) {
  arguments_assert(arguments, 4);
  let key = property_get(event, "key");
  key = text_lower_to(key);
  if (equal(key, "backspace")) {
    let ne = text_empty_not_is(typed);
    if (ne) {
      typed = text_take_less_1(typed);
    }
  } else {
    let includes = text_alphabet_includes(key);
    if (includes) {
      if (greater_than(visible_count, 0)) {
        typed += key;
      }
    }
  }
  visible_count = buttons_refresh();
  let r = {
    typed,
    visible_count,
  };
  return r;
}
