import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_message_send_label(div, on_send) {
  arguments_assert(arguments, 2);
  let left = emoji_email();
  let text = text_combine(left, " Send");
  let button_send = app_shared_button_green(div, text, on_send);
  return button_send;
}
