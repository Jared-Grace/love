import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_message_messages_get } from "./app_message_messages_get.mjs";
import { app_message_message_display } from "./app_message_message_display.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { reply_messages_matches } from "./reply_messages_matches.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
export async function app_message_refresh(
  div_messages,
  context,
  messages_property,
  start,
) {
  arguments_assert(arguments, 4);
  html_clear(div_messages);
  let messages = app_message_messages_get(context, messages_property);
  function lambda(message) {
    app_message_message_display("left", message, div_messages);
    let right = app_message_message_display(
      "right",
      "(Loading...)",
      div_messages,
    );
    let background = app_shared_button_uncolored_background_color();
    html_style_background_color_set(right, background);
    async function next() {
      let results = await reply_messages_matches([message], start);
      let e = list_empty_is(results);
      html_clear(right);
      if (e) {
        html_text_set(
          right,
          "I have received your message. Lord-willing, I will answer. Please come back later to see if I have replied.",
        );
      } else {
        let outputs = list_first_property(results, "outputs");
        html_div_text_multiple(right, outputs);
      }
    }
    return next;
  }
  let nexts = list_map(messages, lambda);
  await invoke_multiple_unordered_async(nexts);
}
