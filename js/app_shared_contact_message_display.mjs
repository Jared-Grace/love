import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_set_directed } from "./html_text_set_directed.mjs";
export function app_shared_contact_message_display(
  direction,
  message,
  div_messages,
) {
  arguments_assert(arguments, 3);
  ("★ A LINE BREAK IN A MESSAGE IS SHOWN AS A LINE BREAK. A prayer opens on one line and asks on the next, and the message app the reply is sent through keeps those lines apart; drawn with the page's default it ran them together into one paragraph, so what was shown was not what would be sent.");
  let div_message = app_shared_container(div_messages);
  html_style_assign(div_message, {
    width: "80%",
    [text_combine("margin-", direction)]: "auto",
  });
  html_style_white_space(div_message, "pre-wrap");
  html_text_set_directed(div_message, message);
  return div_message;
}
