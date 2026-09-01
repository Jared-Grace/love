import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_key_down } from "./app_reply_key_down.mjs";
import { property_set } from "./property_set.mjs";
export function app_reply_key_down_handle(
  event,
  typed_held,
  visible_count_held,
  buttons_refresh,
) {
  arguments_assert(arguments, 4);
  let typed = property_get(typed_held, "typed");
  let visible_count = property_get(visible_count_held, "visible_count");
  let app_reply_key_down_answer = app_reply_key_down(
    event,
    typed,
    visible_count,
    buttons_refresh,
  );
  let value = property_get(app_reply_key_down_answer, "typed");
  property_set(typed_held, "typed", value);
  let value5 = property_get(app_reply_key_down_answer, "visible_count");
  property_set(visible_count_held, "visible_count", value5);
}
