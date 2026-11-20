import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_yellow_tint } from "./app_shared_color_yellow_tint.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { window_open } from "./window_open.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { html_div } from "./html_div.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
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
  ('★ NOTHING HERE MAY READ AS BOOKED. Many guests do not read English well (human, 2026-11-20: "if they think I booked, meeting will happen then there\'s a potential issue"), so the warning stacks signals - an icon, a coloured box, bold words - and says the one thing: no meeting yet.');
  ("on_check draws the page again from the server - pressed after the host's message arrives, it shows the times. on_change shows the form again, for a guest who typed the wrong number.");
  let app_name = equal(proof.via, "messenger") ? "Messenger" : "WhatsApp";
  let warning = html_div_text(
    card,
    "⚠️ No meeting yet. You cannot pick a time yet.",
  );
  app_shared_style_control(warning);
  html_style_assign(warning, {
    "box-sizing": "border-box",
    "background-color": app_shared_color_yellow_tint(),
    "font-weight": "bold",
    "text-align": "center",
  });
  html_div_text(card, "1. Send me this code on " + app_name + ":");
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
  app_shared_button_green(card, "Send code on " + app_name, send_open);
  async function code_copy() {
    await clipboard_copy_browser(proof.code);
    app_shared_toast("✅ Copied code");
  }
  app_shared_button_uncolored(card, "Copy code", code_copy);
  let sent_from = equal(proof.via, "messenger")
    ? "Send it from your Facebook: " + proof.profile_given
    : "Send it from this WhatsApp number: " + proof.whatsapp;
  let from_line = html_div_text(card, sent_from);
  app_shared_text_deemphasized(from_line);
  html_div_text(card, "2. I will message you back on " + app_name + ".");
  html_div_text(card, "3. Then open this page again and pick a time.");
  app_shared_button_uncolored(
    card,
    "I got your message - pick a time",
    on_check,
  );
  html_div_text(card, "Your private link to this page. Please save it:");
  let link = html_url_without_hash() + "#host=" + slug + ",key=" + key;
  let link_line = html_div(card);
  html_a_href_text_new_tab(link_line, link, link);
  async function link_copy() {
    await clipboard_copy_browser(link);
    app_shared_toast("✅ Copied link");
  }
  app_shared_button_uncolored(card, "Copy link", link_copy);
  let wrong = equal(proof.via, "messenger")
    ? "Wrong profile link? Change it"
    : "Wrong number? Change it";
  app_shared_button_uncolored(card, wrong, on_change);
}
