import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { log } from "./log.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
export function app_reply_response_button(
  choice,
  responses,
  responses_buttons,
  copy_refresh,
  typed_reset,
  buttons_refresh,
  visible_count_held,
  card,
) {
  arguments_assert(arguments, 8);
  let b = null;
  let text = property_get(choice, "text");
  async function click() {
    log(app_reply_response_button.name, {
      choice,
    });
    let response = property_get(choice, "response");
    list_add(responses, response);
    list_add(responses_buttons, b);
    await copy_refresh();
    typed_reset();
    let value = buttons_refresh();
    property_set(visible_count_held, "visible_count", value);
  }
  b = app_shared_button(card, text, click);
  object_merge_set(b, choice);
  object_merge_set(b, {
    click,
  });
  return b;
}
