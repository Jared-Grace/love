import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_yellow_tint } from "./app_shared_color_yellow_tint.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { window_open } from "./window_open.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_calendar_private_link_draw } from "./app_calendar_private_link_draw.mjs";
export function app_calendar_guest_proof_waiting(
  card,
  slug,
  key,
  proof,
  on_change,
  on_check,
) {
  arguments_assert(arguments, 6);
  ("What a guest sees after Get my code, until the host has seen the code arrive: a plain warning that there is no meeting yet, the code, a big button that opens WhatsApp (or Messenger) with it typed, and what happens next.");
  ('★ NOTHING HERE MAY READ AS BOOKED. Many guests do not read English well (human, 2026-11-20: "if they think I booked, meeting will happen then there\'s a potential issue"), so the warning stacks signals - an icon, a coloured box, bold words - and says the one thing: confirm first, the time comes after.');
  ('IT NAMES THE STEP, NOT A MISSING MEETING (human, 2026-11-25: "it shouldn\'t say no meeting yet? when confirming fb?"): this screen confirms the app; no meeting was asked for, so "no meeting yet" answered a question nobody had. Said the same for WhatsApp, which is the same step. Not built: dropping the box altogether, which would lose the guard above.');
  ("on_check draws the page again from the server - pressed after the host's message arrives, it shows the times. on_change shows the form again, for a guest who typed the wrong number.");
  let app_name = equal(proof.via, "messenger") ? "Messenger" : "WhatsApp";
  let warning = html_div_text(
    card,
    "⚠️ First confirm your " + app_name + ". Then you can pick a time.",
  );
  app_shared_style_control(warning);
  html_style_assign(warning, {
    "box-sizing": "border-box",
    "background-color": app_shared_color_yellow_tint(),
    "font-weight": "bold",
    "text-align": "center",
  });
  let messenger = equal(proof.via, "messenger");
  ('MESSENGER: COPY FIRST, THEN SEND (human, 2026-11-25: "For FB messenger confirmation first should be copy code then 2 should be send code to messenger"). A Messenger link opens the chat empty - it cannot carry the code typed in, as WhatsApp\'s can - so the guest copies it before opening the chat, to paste there. WhatsApp keeps one send step, its code already typed.');
  html_div_text(
    card,
    messenger
      ? "1. Copy this code:"
      : "1. Send me this code on " + app_name + ":",
  );
  let code_line = html_div_text_content(card, proof.code);
  html_style_assign(code_line, {
    "font-size": "1.6em",
    "font-weight": "bold",
    "text-align": "center",
    "letter-spacing": "0.05em",
  });
  function send_open() {
    window_open(proof.send_url);
  }
  async function code_copy() {
    await clipboard_copy_browser(proof.code);
    app_shared_toast("✅ Copied code");
  }
  if (messenger) {
    app_shared_button_green(card, "Copy code", code_copy);
    html_div_text(card, "2. Send the code to me on Messenger:");
    app_shared_button_green(card, "Send code on Messenger", send_open);
  } else {
    app_shared_button_green(card, "Send code on " + app_name, send_open);
    app_shared_button_uncolored(card, "Copy code", code_copy);
  }
  let sent_from = messenger
    ? "Send it from your Facebook: " + proof.profile_given
    : "Send it from this WhatsApp number: " + proof.whatsapp;
  let from_line = html_div_text(card, sent_from);
  app_shared_text_deemphasized(from_line);
  let step = messenger ? 3 : 2;
  html_div_text(card, step + ". I will message you back on " + app_name + ".");
  html_div_text(
    card,
    step + 1 + ". Then open this page again and pick a time.",
  );
  app_shared_button_uncolored(
    card,
    "I got your message - pick a time",
    on_check,
  );
  app_calendar_private_link_draw(card, slug, key);
  let wrong = equal(proof.via, "messenger")
    ? "Wrong profile link? Change it"
    : "Wrong number? Change it";
  app_shared_button_uncolored(card, wrong, on_change);
}
