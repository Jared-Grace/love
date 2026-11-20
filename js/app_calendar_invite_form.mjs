import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { equal } from "./equal.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_div } from "./html_div.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
export function app_calendar_invite_form(parent, key) {
  arguments_assert(arguments, 2);
  ("Draws, on the host's page, a card that makes a booking link for one person: their name, the app their chat is on, and the WhatsApp number or Messenger chat link. The link it hands back opens the times at once, so the host pastes it into that chat with the message shown.");
  ('★ ONLY PASTE IT INTO THE CHAT IT WAS MADE FOR (human, 2026-11-20: "when someone messages me on Meta Messenger or WhatsApp, then I send them a link"). The link holds that person as already proven, so it is the host sending it into their chat that proves it - the card says so, and Open the chat goes to exactly that chat.');
  let card = app_shared_container(parent);
  app_shared_heading(card, "Make a link for one person");
  let intro = html_div_text(
    card,
    "Paste it in their chat. They pick a time at once, with no code. Only send it to the chat you typed here.",
  );
  app_shared_text_deemphasized(intro);
  let via = "whatsapp";
  let via_line = html_div_text(card, "");
  let name_field = app_shared_field(card);
  html_div_text(name_field, "Their name");
  let name = html_input_text(name_field, "Their name");
  app_shared_input_style(name);
  let contact_field = app_shared_field(card);
  let contact_label = html_div_text(contact_field, "");
  let contact = html_input_text(contact_field, "");
  app_shared_input_style(contact);
  function via_show() {
    let messenger = equal(via, "messenger");
    html_text_content_set(
      via_line,
      "Their chat is on: " + (messenger ? "Messenger" : "WhatsApp"),
    );
    html_text_content_set(
      contact_label,
      messenger
        ? "Their Messenger chat link or Facebook profile link"
        : "Their WhatsApp number",
    );
    html_placeholder(
      contact,
      messenger ? "facebook.com/messages/t/..." : "+1 555 123 4567",
    );
  }
  via_show();
  function whatsapp_pick() {
    via = "whatsapp";
    via_show();
  }
  function messenger_pick() {
    via = "messenger";
    via_show();
  }
  app_shared_button_uncolored(card, "WhatsApp", whatsapp_pick);
  app_shared_button_uncolored(card, "Messenger", messenger_pick);
  let status = html_div_text(card, "");
  let result = html_div(card);
  async function link_make() {
    html_clear(result);
    html_text_content_set(status, "");
    let typed = html_value_get(contact).trim();
    let sent = await calendar_api_call(
      "POST",
      "invite",
      {
        name: html_value_get(name).trim(),
        via,
        contact: typed,
      },
      key,
    );
    if (not(sent.body.ok)) {
      let words = {
        whatsapp: "That WhatsApp number does not look right.",
        profile: "Paste a Messenger chat link or a Facebook profile link.",
        messenger: "Save your Messenger name in the booking rules first.",
        no_host: "Save your booking link above first.",
      };
      let text = property_get_or(
        words,
        sent.body.reason,
        "Could not make the link. Try again.",
      );
      html_text_content_set(status, text);
      return;
    }
    let link =
      html_url_without_hash() +
      "#host=" +
      sent.body.slug +
      ",key=" +
      sent.body.key;
    let message = "Pick a time for our call here: " + link;
    html_div_text(result, "Send this in their chat:");
    html_div_text_content(result, message);
    async function message_copy() {
      await clipboard_copy_browser(message);
      app_shared_toast("✅ Copied");
    }
    app_shared_button_green(result, "Copy", message_copy);
    let chat = equal(via, "messenger")
      ? (/^https?:\/\//i.test(typed) ? "" : "https://") + typed
      : "https://wa.me/" +
        typed.replace(/\D/g, "") +
        "?text=" +
        encodeURIComponent(message);
    html_a_href_text_new_tab(result, chat, "Open the chat");
  }
  app_shared_button_green(card, "Make link", link_make);
}
