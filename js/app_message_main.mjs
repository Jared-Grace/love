import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { html_textarea } from "./html_textarea.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { list_first } from "./list_first.mjs";
import { reply_messages_matches } from "./reply_messages_matches.mjs";
import { property_get } from "./property_get.mjs";
import { app_message_reply_choices } from "./app_message_reply_choices.mjs";
import { app_message_firebase_path } from "./app_message_firebase_path.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
import { uuid } from "./uuid.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { list_add } from "./list_add.mjs";
import { storage_local_initialize_context } from "./storage_local_initialize_context.mjs";
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
import { app_replace_font_size_refresh } from "./app_replace_font_size_refresh.mjs";
import { app_karate_style_control_border } from "./app_karate_style_control_border.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { list_map } from "./list_map.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_message_main(context) {
  let messages_property = "messages";
  let u = await uuid();
  let user_id_property = "user_id";
  let app_fn = app_message_main;
  let root = property_get(context, "root");
  object_merge_set(context, {
    app_fn,
  });
  storage_local_initialize_context(context, user_id_property, u);
  app_replace_font_size_refresh(context);
  html_font_sans_serif_set_html();
  let div_messages = html_div(root);
  let start = app_message_reply_choices();
  await refresh();
  let div = app_shared_container(root);
  let div2 = html_div_text(div, "Please enter your message for me:");
  let textarea = html_textarea(div);
  html_placeholder(textarea, "Please enter your message here");
  app_shared_style_control(textarea);
  app_karate_style_control_border(textarea, "gray");
  html_focus(textarea);
  let div_checks = html_div(div);
  let button_send = app_shared_button_green(
    div,
    text_combine(emoji_email(), " Send"),
    on_send,
  );
  let v = html_check_empty_not();
  app_karate_screen_input_validate(div, div_checks, [textarea], button_send, [
    v,
  ]);
  async function refresh() {
    html_clear(div_messages);
    let messages = messages_get();
    function lambda(message) {
      message_display("left", message);
      let right = message_display("right", "(Loading...)");
      html_style_assign(right, {
        "background-color": app_shared_button_uncolored_background_color(),
      });
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
          let first = list_first(results);
          let outputs = property_get(first, "outputs");
          html_div_text_multiple(right, outputs);
        }
      }
      return next;
    }
    let nexts = list_map(messages, lambda);
    await invoke_multiple_unordered_async(nexts);
  }
  function message_display(direction, message) {
    let div_message = app_shared_container(div_messages);
    html_style_assign(div_message, {
      width: "80%",
      [text_combine("margin-", direction)]: "auto",
    });
    html_text_set(div_message, message);
    return div_message;
  }
  function messages_get() {
    let value = storage_local_initialize_context(
      context,
      messages_property,
      [],
    );
    return value;
  }
  async function on_send() {
    let message = html_value_get(textarea);
    html_value_set(textarea, "");
    let results = await reply_messages_matches([message], start);
    let ei = list_empty_is(results);
    if (ei) {
      let message_id = await uuid();
      let file_name = text_combine_multiple([
        app_message_firebase_path(),
        u,
        "/",
        message_id,
      ]);
      let file_path = file_name_json(file_name);
      await firebase_upload_object_browser(file_path, {
        message,
        when: date_now_iso(),
      });
    }
    let messages = messages_get();
    list_add(messages, message);
    storage_local_set_context(context, messages_property, messages);
    await refresh();
  }
}
