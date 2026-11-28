import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { equal } from "./equal.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_choice_row } from "./app_shared_choice_row.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { app_shared_problem_clear } from "./app_shared_problem_clear.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_problem_show } from "./app_shared_problem_show.mjs";
import { app_shared_problem_words_set } from "./app_shared_problem_words_set.mjs";
import { calendar_guest_link } from "./calendar_guest_link.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { calendar_chat_url } from "./calendar_chat_url.mjs";
import { window_open } from "./window_open.mjs";
export function app_calendar_invite_form(parent, key) {
  arguments_assert(arguments, 2);
  ("Draws, on the host's page, a card that makes a booking link for one person: the app their chat is on, and the WhatsApp number or Messenger chat link. The link it hands back opens the times at once, so the host pastes it into that chat with the message shown.");
  ('★ ONLY PASTE IT INTO THE CHAT IT WAS MADE FOR (human, 2026-11-20: "when someone messages me on Meta Messenger or WhatsApp, then I send them a link"). The link holds that person as already proven, so it is the host sending it into their chat that proves it - the card says so, and Open the chat goes to exactly that chat.');
  let card = app_shared_container(parent);
  app_shared_heading(card, "Make a link for one person");
  let intro = html_div_text(
    card,
    "Paste it in their chat. They pick a time at once, with no code. Only send it to the chat you typed here.",
  );
  app_shared_text_deemphasized(intro);
  let via = "whatsapp";
  ('THE APP COMES FIRST, AND THE ONE CHOSEN SHOWS (human, 2026-11-21: "messenger/whatsapp buttons should be before the input? and it should show which one is chosen?"): the choice decides what the box below asks for, so it is made before the box is reached.');
  let via_area = html_div(card);
  ('NO NAME IS ASKED (human, 2026-11-28: "however name doesn\'t need to be collected?"): the number or chat link already says who it is for, and the host\'s lists show that when there is no name - the same reason the guest form stopped asking (human, 2026-11-24: "goal is collect less info").');
  let contact_field = app_shared_field(card);
  let contact_label = html_div_text(contact_field, "");
  let contact = html_input_text(contact_field, "");
  app_shared_input_style(contact);
  function via_show() {
    let messenger = equal(via, "messenger");
    html_clear(via_area);
    let choices = [
      {
        key: "whatsapp",
        text: "WhatsApp",
      },
      {
        key: "messenger",
        text: "Messenger",
      },
    ];
    app_shared_choice_row(via_area, "Their chat is on", choices, via, via_pick);
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
  function via_pick(value) {
    via = value;
    via_show();
  }
  via_show();
  let status = html_div_text(card, "");
  let result = html_div(card);
  async function link_make() {
    let typed = html_value_get(contact).trim();
    let sent = await calendar_api_call(
      "POST",
      "invite",
      {
        name: "",
        via,
        contact: typed,
      },
      key,
    );
    ("The last link and message stay on screen until the answer is in, so the wait never shows a blank.");
    html_clear(result);
    app_shared_problem_clear(contact_field, status, make_button);
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
      ("A refusal reads like every other form's: in the shared red, and when the box is what is wrong, the box is ringed too.");
      if (
        equal(sent.body.reason, "whatsapp") ||
        equal(sent.body.reason, "profile")
      ) {
        app_shared_problem_show(contact_field, text, status, make_button);
      } else {
        app_shared_problem_words_set(status, text);
      }
      return;
    }
    let link = calendar_guest_link(sent.body.slug, sent.body.key);
    let message = "Pick a time for our call here: " + link;
    html_div_text(result, "Send this in their chat:");
    html_div_text_content(result, message);
    async function message_copy() {
      await clipboard_copy_browser(message);
      app_shared_toast("✅ Copied");
    }
    ('THE BUTTON SAYS WHAT IT COPIES (human, 2026-11-28: "Copy should be Copy their private link?"): it copies the whole message, the private link inside it, so it says both.');
    app_shared_button_green(
      result,
      "Copy message with their private link",
      message_copy,
    );
    let chat = calendar_chat_url(via, typed, message);
    ('A BUTTON, LIKE COPY BESIDE IT (human, 2026-11-21: "open the chat should be a button?").');
    function chat_open() {
      window_open(chat);
    }
    app_shared_button_green(result, "Open the chat", chat_open);
  }
  let make_button = app_shared_button_green(card, "Make link", link_make);
}
