import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_empty_not_is } from "../../../love/public/src/list_empty_not_is.mjs";
import { reply_messages_matches } from "../../../love/public/src/reply_messages_matches.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_message_reply_choices } from "../../../love/public/src/app_message_reply_choices.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
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
import { html_font_san_serif } from "../../../love/public/src/html_font_san_serif.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_placeholder } from "../../../love/public/src/html_placeholder.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_karate_container } from "../../../karate_code/public/src/app_karate_container.mjs";
import { app_replace_font_size_refresh } from "../../../love/public/src/app_replace_font_size_refresh.mjs";
import { app_karate_style_control_border } from "../../../love/public/src/app_karate_style_control_border.mjs";
import { app_karate_style_control } from "../../../karate_code/public/src/app_karate_style_control.mjs";
import { html_document_body } from "../../../love/public/src/html_document_body.mjs";
import { html_element } from "../../../love/public/src/html_element.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_message_main() {
  marker("1");
  const messages_property = "messages";
  let u = await uuid();
  const user_id_property = "user_id";
  let app_fn = app_message_main;
  const root = html_document_body();
  const context = {
    app_fn,
    root: root,
  };
  storage_local_initialize_context(context, user_id_property, u);
  app_replace_font_size_refresh(context);
  html_font_san_serif(context);
  let div_messages = html_div(root);
  let start = app_message_reply_choices();
  await refresh();
  let div = app_karate_container(root);
  let div2 = html_div_text(div, "Please enter your message for me:");
  let textarea = html_element(div, "textarea");
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
  app_karate_screen_input_validate(div, div_checks, textarea, button_send, [v]);
  async function refresh() {
    html_clear(div_messages);
    let messages = messages_get();
    async function lambda2(message) {
      message_display("left", message);
      let right = message_display(
        "right",
        "I have received your message. Lord-willing, I will answer. Please come back later to see if I have replied.",
      );
      html_style_assign(right, {
        "background-color": app_karate_button_uncolored_background_color(),
      });
      let results = await reply_messages_matches([message], start);
      let ne = list_empty_not_is(results);
      if (ne) {
        let first = list_first(results);
        let outputs = object_property_get(first, "outputs");
        html_clear(right);
        html_div_text_multiple(right, outputs);
      }
    }
    await each_async(messages, lambda2);
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
    let results = await reply_messages_matches([message], start);
    let ne = list_empty_not_is(results);
    if (false) {
    }
    let message_id = await uuid();
    const file_name = app_message_firebase_path() + u + "/" + message_id;
    let file_path = file_name_json(file_name);
    await firebase_upload_object(
      {
        message,
        when: date_now_iso(),
      },
      file_path,
    );
    let messages = messages_get();
    list_add(messages, message);
    storage_local_set_context(context, messages_property, messages);
    await refresh();
  }
}
