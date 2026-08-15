import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_contact_messages } from "./app_shared_contact_messages.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { each } from "./each.mjs";
import { app_shared_contact_received_text } from "./app_shared_contact_received_text.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_shared_contact_overlay_thread_render(thread) {
  arguments_assert(arguments, 1);
  html_clear(thread);
  let messages = app_shared_contact_messages();
  let none = list_empty_is(messages);
  if (none) {
    ("nobody has written yet, so there is nothing to show back and the panel is just the box");
    return;
  }
  function lambda(message) {
    app_shared_contact_message_display("left", message, thread);
  }
  each(messages, lambda);
  let received = app_shared_contact_received_text();
  let right = app_shared_contact_message_display("right", received, thread);
  let background = app_shared_button_uncolored_background_color();
  html_style_background_color_set(right, background);
}
