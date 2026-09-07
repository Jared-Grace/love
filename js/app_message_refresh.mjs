import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_message_messages_get } from "./app_message_messages_get.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { app_shared_contact_received_text } from "./app_shared_contact_received_text.mjs";
import { html_text_set_directed } from "./html_text_set_directed.mjs";
import { list_map } from "./list_map.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
export async function app_message_refresh(
  div_messages,
  context,
  messages_property,
  start,
) {
  arguments_assert(arguments, 4);
  ("Draws the thread over again: each message somebody sent, with what the reply rules say back to it underneath.");
  ("★ A MESSAGE THAT BREAKS THE RULES STILL GETS AN ANSWER. The reply is worked out through the unit that keeps the three outcomes apart, and two of those three - no rule matched, and the rules broke - are shown here as the same standing answer on purpose. The person waiting is owed a reply either way, and which of the two it was is a thing for the people writing rules to read on their own screen rather than something to make somebody in another country work out from a bubble that never stops loading. Before this, a message the rules threw on sat on Loading for as long as the app was open.");
  ("Every message is put up saying Loading before any of them is worked out, and each is filled in as its own answer arrives. So the thread has its full shape immediately and the slow ones do not hold up the quick ones.");
  html_clear(div_messages);
  let messages = app_message_messages_get(context, messages_property);
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
