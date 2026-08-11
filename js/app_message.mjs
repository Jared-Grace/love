import { app_message_messages_get } from "./app_message_messages_get.mjs";
import { app_message_message_display } from "./app_message_message_display.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { reply_messages_matches } from "./reply_messages_matches.mjs";
import { property_get } from "./property_get.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
import { app_shared_contact_send } from "./app_shared_contact_send.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_check_empty_not } from "./html_check_empty_not.mjs";
import { app_karate_screen_input_validate } from "./app_karate_screen_input_validate.mjs";
import { emoji_email } from "./emoji_email.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_message(context) {
  let messages_property = "messages";
  let app_fn = app_message;
  let root = property_get(context, "root");
  object_merge_set(context, {
    app_fn,
  });
  app_shared_font_size_refresh(context);
  html_font_sans_serif_set_html();
  let div_messages = html_div(root);
  let start = app_message_reply_choices();
  await refresh();
  let div = app_shared_container(root);
  html_div_text(div, "Please enter your message for me:");
  let textarea = html_textarea(div);
  html_placeholder(textarea, "Please enter your message here");
  app_shared_input_style(textarea);
  html_focus(textarea);
  let div_checks = html_div(div);
  let left = emoji_email();
  let text = text_combine(left, " Send");
  let button_send = app_shared_button_green(div, text, on_send);
  let v = html_check_empty_not();
  app_karate_screen_input_validate(div, div_checks, [textarea], button_send, [
    v,
  ]);
  async function refresh() {
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
  async function on_send() {
    let message = html_value_get(textarea);
    html_value_set(textarea, "");
    let results = await reply_messages_matches([message], start);
    let ei = list_empty_is(results);
    if (ei) {
      ("no canned reply matched, so this is something for the developer to read — send it to the inbox tagged as coming from the message app");
      await app_shared_contact_send("message", message);
    }
    let messages = app_message_messages_get(context, messages_property);
    list_add(messages, message);
    storage_local_set_context(context, messages_property, messages);
    await refresh();
  }
}
