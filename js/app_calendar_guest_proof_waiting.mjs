import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_yellow_tint } from "./app_shared_color_yellow_tint.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { window_open } from "./window_open.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_calendar_private_link_draw } from "./app_calendar_private_link_draw.mjs";
export function app_calendar_guest_proof_waiting(
  card,
  slug,
  key,
  proof,
  on_change,
  on_check,
  on_back,
  start_waiting,
) {
  arguments_assert(arguments, 8);
  ("What a guest sees after Get my code, until the host has seen the code arrive: a plain warning that the app is not confirmed yet, the code, a big button that opens WhatsApp (or Messenger) with it, and what happens next.");
  ('★ NOTHING HERE MAY READ AS BOOKED. Many guests do not read English well (human, 2026-11-20: "if they think I booked, meeting will happen then there\'s a potential issue"), so the warning stacks signals - an icon, a coloured box, bold words - and says the one thing: confirm first, the time comes after. It heads every screen below.');
  ('IT NAMES THE STEP, NOT A MISSING MEETING (human, 2026-11-25: "it shouldn\'t say no meeting yet? when confirming fb?"): this screen confirms the app; no meeting was asked for, so "no meeting yet" answered a question nobody had. Said the same for WhatsApp, which is the same step. Not built: dropping the box altogether, which would lose the guard above.');
  ('★ ONE STEP PER SCREEN (human, 2026-11-26: "for confirm your facebook profile should it also be step by step? first they choose copy then they are taken to another screen then they can choose send code then they\'re told they\'re waiting on me to receive the code", and for WhatsApp too, chosen with "1" after "after choosing change wa# it should be step by step?"). Messenger: copy, then send, then waiting. WhatsApp: send, then waiting - its send opens the chat with the code already typed, so there is nothing to copy first.');
  ('MESSENGER: COPY FIRST, THEN SEND (human, 2026-11-25: "For FB messenger confirmation first should be copy code then 2 should be send code to messenger"). A Messenger link opens the chat empty - it cannot carry the code typed in, as WhatsApp\'s can - so the guest copies it before opening the chat, to paste there.');
  ("Copying can fail without a word on some phones, so the copy screen moves on either way, and the send screen keeps the code in sight with a plain Copy code again.");
  ("start_waiting opens on the waiting screen - for a guest who pressed I got your message before the host answered. Otherwise it opens on the first step. The waiting screen can go back to the send screen, for a guest who never sent the code.");
  ("on_check draws the page again from the server - pressed after the host's message arrives, it shows the times. on_change shows the form again, for a guest who typed the wrong number. on_back leaves for the page's first screen; Back on a later screen goes to the step before it.");
  let app_name = equal(proof.via, "messenger") ? "Messenger" : "WhatsApp";
  let messenger = equal(proof.via, "messenger");
  let screen = html_div(card);
  function warning_draw() {
    let warning = html_div_text(
      screen,
      "⚠️ First confirm your " + app_name + ". Then you can pick a time.",
    );
    app_shared_style_control(warning);
    html_style_assign(warning, {
      "box-sizing": "border-box",
      "background-color": app_shared_color_yellow_tint(),
      "font-weight": "bold",
      "text-align": "center",
    });
  }
  function code_draw(size) {
    let code_line = html_div_text_content(screen, proof.code);
    html_style_assign(code_line, {
      "font-size": size,
      "font-weight": "bold",
      "text-align": "center",
      "letter-spacing": "0.05em",
    });
  }
  function back_draw(go) {
    let text = app_shared_button_back_text();
    app_shared_button_uncolored(screen, text, go);
  }
  async function code_copy() {
    await clipboard_copy_browser(proof.code);
    app_shared_toast("✅ Copied code");
  }
  function copy_show() {
    html_clear(screen);
    warning_draw();
    html_div_text(screen, "1. Copy this code:");
    code_draw("1.6em");
    async function copy_then_send() {
      function copy_failed() {
        return null;
      }
      await code_copy().catch(copy_failed);
      send_show();
    }
    app_shared_button_green(screen, "Copy code", copy_then_send);
    back_draw(on_back);
  }
  function send_show() {
    html_clear(screen);
    warning_draw();
    html_div_text(
      screen,
      messenger
        ? "2. Send the code to me on Messenger:"
        : "1. Send me this code on WhatsApp:",
    );
    code_draw(messenger ? "1.2em" : "1.6em");
    function send_then_wait() {
      window_open(proof.send_url);
      waiting_show();
    }
    app_shared_button_green(screen, "Send code on " + app_name, send_then_wait);
    app_shared_button_uncolored(
      screen,
      messenger ? "Copy code again" : "Copy code",
      code_copy,
    );
    let sent_from = messenger
      ? "Send it from your Facebook: " + proof.profile_given
      : "Send it from this WhatsApp number: " + proof.whatsapp;
    let from_line = html_div_text(screen, sent_from);
    app_shared_text_deemphasized(from_line);
    back_draw(messenger ? copy_show : on_back);
  }
  function waiting_show() {
    html_clear(screen);
    warning_draw();
    let next = messenger ? 3 : 2;
    html_div_text(
      screen,
      next + ". I will message you back on " + app_name + ".",
    );
    html_div_text(
      screen,
      next + 1 + ". Then open this page again and pick a time.",
    );
    app_shared_button_green(
      screen,
      "I got your message - pick a time",
      on_check,
    );
    app_shared_button_uncolored(screen, "Show your code again", send_show);
    app_calendar_private_link_draw(screen, slug, key);
    let wrong = messenger
      ? "Wrong profile link? Change it"
      : "Wrong number? Change it";
    app_shared_button_uncolored(screen, wrong, on_change);
    ("Back here leaves for the first screen: the step before is one press away already, under Show your code again.");
    back_draw(on_back);
  }
  if (start_waiting) {
    waiting_show();
    return;
  }
  if (messenger) {
    copy_show();
    return;
  }
  send_show();
}
