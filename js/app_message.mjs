import { app_message_send_label } from "./app_message_send_label.mjs";
import { property_get } from "./property_get.mjs";
import { object_merge_set } from "./object_merge_set.mjs";
import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_bar_content_sticky } from "./html_bar_content_sticky.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_message_reply_choices } from "./app_shared_message_reply_choices.mjs";
import { app_shared_message_refresh } from "./app_shared_message_refresh.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_scroll_bottom_set } from "./html_scroll_bottom_set.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_contact_local_note } from "./app_shared_contact_local_note.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_textarea_reader_direction } from "./app_shared_textarea_reader_direction.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_focus } from "./html_focus.mjs";
import { html_check_empty_not } from "./html_check_empty_not.mjs";
import { app_karate_screen_input_validate } from "./app_karate_screen_input_validate.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { reply_attempt } from "./reply_attempt.mjs";
import { property_not } from "./property_not.mjs";
import { app_shared_contact_send } from "./app_shared_contact_send.mjs";
import { app_shared_message_messages_get } from "./app_shared_message_messages_get.mjs";
import { list_add } from "./list_add.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { app_shared_footer_parent } from "./app_shared_footer_parent.mjs";
import { app_shared_footer_all_apps } from "./app_shared_footer_all_apps.mjs";
export async function app_message(context) {
  "A place for somebody to write to the person who made these apps, and be answered.";
  "★ WHETHER A MESSAGE REACHES A PERSON IS DECIDED BY WHETHER THE RULES ANSWERED IT, AND THE RULES BREAKING COUNTS AS NOT ANSWERING. That is the safe way round: a message the rules threw on is sent to the inbox, so it is read by somebody rather than lost between a reply that was never worked out and a send that never happened. Before this, a throw here stopped the send, stopped the message being kept, and left the person looking at a bubble that said Loading.";
  "What is written is kept on the person's own device as well, so the thread is still there when they come back, and the reply is worked out again from the rules rather than stored beside it - which means improving a rule improves what they see the next time they open it.";
  let messages_property = "messages";
  let app_fn = app_message;
  let root = property_get(context, "root");
  object_merge_set(context, {
    app_fn,
  });
  app_shared_font_size_refresh(context);
  html_font_sans_serif_set_html();
  ("★ THE PLACE TO WRITE IS ALWAYS IN SIGHT, asked for by the human 2026-11-22: the messages go in the body of a page that scrolls the ordinary way, and the box with the send button is held against the bottom of the screen beneath them, the way every chat does it. The page does the scrolling rather than a box of its own, because a box that scrolls inside itself re-lays-out on Android Firefox the moment the keyboard opens and typing then reaches nothing.");
  let frame = html_bar_content_sticky(root);
  let content = property_get(frame, "content");
  let foot = property_get(frame, "foot");
  let div_messages = html_div(content);
  let start = app_shared_message_reply_choices();
  await app_shared_message_refresh(
    div_messages,
    context,
    messages_property,
    start,
  );
  let page = html_document_root();
  html_scroll_bottom_set(page);
  let div = app_shared_container(foot);
  app_shared_contact_local_note(div);
  html_div_text(div, "Please enter your message for me:");
  let textarea = app_shared_textarea_reader_direction(div);
  html_placeholder(textarea, "Please enter your message here");
  app_shared_input_style(textarea);
  html_focus(textarea);
  let div_checks = html_div(div);
  let button_send = app_message_send_label(div, on_send);
  let v = html_check_empty_not();
  app_karate_screen_input_validate(div, div_checks, [textarea], button_send, [
    v,
  ]);
  async function on_send() {
    let message = html_value_get(textarea);
    html_value_set(textarea, "");
    let attempt = await reply_attempt(message, start);
    let ei = property_not(attempt, "answered");
    if (ei) {
      ("no canned reply matched, so this is something for the developer to read — send it to the inbox, which records the page it was written from");
      await app_shared_contact_send(message);
    }
    let messages = app_shared_message_messages_get(context, messages_property);
    list_add(messages, message);
    storage_local_set_context(context, messages_property, messages);
    await app_shared_message_refresh(
      div_messages,
      context,
      messages_property,
      start,
    );
    ("the newest message is the one just sent, so the page is taken down to it, just above the place it was written");
    html_scroll_bottom_set(page);
  }
  let footer_parent = app_shared_footer_parent(root);
  app_shared_footer_all_apps(footer_parent);
}
