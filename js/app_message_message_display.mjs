import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_message_message_display(direction, message, div_messages) {
  arguments_assert(arguments, 3);
  let div_message = app_shared_container(div_messages);
  html_style_assign(div_message, {
    width: "80%",
    [text_combine("margin-", direction)]: "auto",
  });
  html_text_set(div_message, message);
  return div_message;
}
