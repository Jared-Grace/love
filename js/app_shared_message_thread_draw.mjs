import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { app_shared_contact_received_text } from "./app_shared_contact_received_text.mjs";
import { html_text_set_directed } from "./html_text_set_directed.mjs";
import { list_map } from "./list_map.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
export async function app_shared_message_thread_draw(
  div_messages,
  start,
  messages,
) {
  arguments_assert(arguments, 3);
  function lambda(message) {
    app_shared_contact_message_display("left", message, div_messages);
    let right = app_shared_contact_message_display(
      "right",
      "(Loading...)",
      div_messages,
    );
    let background = app_shared_button_uncolored_background_color();
    html_style_background_color_set(right, background);
    async function next() {
      let attempt = await reply_attempt(message, start);
      let answered = property_get(attempt, "answered");
      html_clear(right);
      if (answered) {
        let outputs = property_get(attempt, "outputs");
        html_div_text_multiple(right, outputs);
      } else {
        let text = app_shared_contact_received_text();
        html_text_set_directed(right, text);
      }
    }
    return next;
  }
  let nexts = list_map(messages, lambda);
  await invoke_multiple_unordered_async(nexts);
}
