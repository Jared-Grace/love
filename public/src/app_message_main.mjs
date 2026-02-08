import { html_textarea } from "../../../love/public/src/html_textarea.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { html_value_set } from "../../../love/public/src/html_value_set.mjs";
import { invoke } from "../../../love/public/src/invoke.mjs";
import { list_empty_is } from "../../../love/public/src/list_empty_is.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { reply_messages_matches } from "../../../love/public/src/reply_messages_matches.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { app_message_firebase_path } from "../../../love/public/src/app_message_firebase_path.mjs";
import { app_karate_button_uncolored_background_color } from "../../../karate_code/public/src/app_karate_button_uncolored_background_color.mjs";
import { date_now_iso } from "../../../love/public/src/date_now_iso.mjs";
import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { uuid } from "../../../love/public/src/uuid.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { storage_local_initialize_context } from "../../../love/public/src/storage_local_initialize_context.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_check_empty_not } from "../../../love/public/src/html_check_empty_not.mjs";
import { app_karate_screen_input_validate } from "../../../love/public/src/app_karate_screen_input_validate.mjs";
import { emoji_email } from "../../../love/public/src/emoji_email.mjs";
import { app_karate_button_green } from "../../../karate_code/public/src/app_karate_button_green.mjs";
import { html_font_sans_serif } from "../../../love/public/src/html_font_sans_serif.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_placeholder } from "../../../love/public/src/html_placeholder.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_karate_container } from "../../../karate_code/public/src/app_karate_container.mjs";
import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { app_karate_style_control_border } from "../../../love/public/src/app_karate_style_control_border.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_map_unordered_async } from "../../../love/public/src/list_map_unordered_async.mjs";
export async function app_message_main(context) {
  const messages_property = "messages";
  let u = await uuid();
  const user_id_property = "user_id";
  let app_fn = app_message_main;
  let root = object_property_get(context, "root");
  object_merge(context, {
    app_fn,
  });
  storage_local_initialize_context(context, user_id_property, u);
  app_replace_font_size_refresh(context);
  html_font_sans_serif(context);
  let div_messages = html_div(root);
  let start = app_message_reply_choices();
  await refresh();
  let div = app_karate_container(root);
  let div2 = html_div_text(div, "Please enter your message for me:");
  let textarea = html_textarea(div);
  html_placeholder(textarea, "Please enter your message here");
  app_karate_style_control(textarea);
  app_karate_style_control_border(textarea, "gray");
  html_focus(textarea);
  let div_checks = html_div(div);
  let button_send = app_karate_button_green(
    div,
    emoji_email() + " Send",
    on_send,
  );
  let v = html_check_empty_not();
  app_karate_screen_input_validate(div, div_checks, [textarea], button_send, [
    v,
  ]);
  async function refresh() {
    html_clear(div_messages);
    let messages = messages_get();
    function lambda2(message) {
      message_display("left", message);
      let right = message_display("right", "(Loading...)");
      html_style_assign(right, {
        "background-color": app_karate_button_uncolored_background_color(),
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
          let function_copy_replace_first = list_first(results);
          let outputs = object_property_get(
            function_copy_replace_first,
            "outputs",
          );
          html_div_text_multiple(right, outputs);
        }
      }
      return next;
    }
    let nexts = list_map(messages, lambda2);
    await list_map_unordered_async(nexts, invoke);
  }
  function message_display(direction, message) {
    let div_message = app_karate_container(div_messages);
    html_style_assign(div_message, {
      width: "80%",
      ["margin-" + direction]: "auto",
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
      const file_name = app_message_firebase_path() + u + "/" + message_id;
      let file_path = file_name_json(file_name);
      await firebase_upload_object(file_path, {
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
