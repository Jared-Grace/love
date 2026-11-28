import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_style_control } from "./app_shared_style_control.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_yellow_tint } from "./app_shared_color_yellow_tint.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { window_open } from "./window_open.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_calendar_private_link_draw } from "./app_calendar_private_link_draw.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
export function app_calendar_guest_proof_waiting(
  card,
  slug,
  key,
  proof,
  on_back,
) {
  arguments_assert(arguments, 5);
  ("What a guest sees after Get your code, until the host has seen the code arrive: a plain warning that the app is not confirmed yet, the code, a button that opens WhatsApp (or Messenger), and what happens next.");
  ('★ NOTHING HERE MAY READ AS BOOKED. Many guests do not read English well (human, 2026-11-20: "if they think I booked, meeting will happen then there\'s a potential issue"), so the warning stacks signals - an icon, a coloured box, bold words - and says the one thing: confirm first, the time comes after. It heads every screen below, under Back.');
  ('IT NAMES THE STEP, NOT A MISSING MEETING (human, 2026-11-25: "it shouldn\'t say no meeting yet? when confirming fb?"): this screen confirms the app; no meeting was asked for. Worded by the human (2026-11-26: "Then you can pick a time {for our meeting}", "First confirm your WhatsApp {phone number}"), naming what is confirmed as the first screen\'s button does.');
  ('★ ONE STEP PER SCREEN, COPY FIRST FOR BOTH APPS (human, 2026-11-26: "first they choose copy then they are taken to another screen then they can choose send code then they\'re told they\'re waiting on me to receive the code"; for WhatsApp: "What about copy code first then new screen to send it?"): copy, then send, then waiting. WhatsApp\'s link does carry the code typed in, so its copy is a spare - kept the same for both so one path is learned, as asked.');
  ('NO STEP NUMBERS (human, 2026-11-26: "No need for numbers 1 on different steps"): one step per screen has nothing to count.');
  ('THE SEND BUTTON SAYS TO ME (human, 2026-11-26: "And what about \\"Send code to my WhatsApp\\"?"). Picked "Send code to me on WhatsApp": the page speaks as the host, but on a button "my WhatsApp" reads as the guest\'s own - the app the code is sent FROM - which is the reading most likely to mislead. Rejected: "Send code to my WhatsApp" (that misreading), "Send code on WhatsApp" (says where, not to whom).');
  ("Copying can fail without a word on some phones, so the copy screen moves on either way, and the send screen keeps the code in sight with a plain Copy code again.");
  ("A guest who already pressed Send for this code opens on the waiting screen; the code sent is kept on the device, so a new code starts again at copy.");
  ("★ BACK IS AT THE TOP of every screen (human, 2026-11-26: \"Back should be at the top of all step by step UI's for consistency?\"). On the send screen it goes to the copy screen; elsewhere it leaves for the page's first screen (on_back). There is no Change button: the guest typed nothing that can be wrong, on either app (human, 2026-11-28).");
  ('★ WAITING HAS NO BUTTON TO PRESS ON (human, 2026-11-27: "I got your message... could that be confusing? because green says press, but really next step is wait?"). The next step is the host\'s, so the screen thanks and says to wait (worded by the human: "Thank you for sending the code! If God wills I will reply that I\'ve received your code"); the host\'s reply carries the page link, and the page opened again shows the times, the confirmation having arrived. Its yellow box says wait, not confirm: the guest has done their part.');
  ('ONE "CODE SENT" PER APP (human, 2026-11-28: "send code for wa, then wa says wait, send code for msg, then msg says wait, but wa is now back to the beginning. Should they both remember that the code was sent? and say wait?"): one shared key let the second app\'s code overwrite the first\'s.');
  let sent_key = "guest_code_sent_" + proof.via;
  let messenger = equal(proof.via, "messenger");
  let app_name = messenger ? "Messenger" : "WhatsApp";
  let confirmed = messenger ? "Facebook profile" : "WhatsApp phone number";
  let screen = html_div(card);
  function warning_draw(words, size) {
    let warning = html_div_text(screen, "⚠️ " + words);
    app_shared_style_control(warning);
    html_style_assign(warning, {
      "box-sizing": "border-box",
      "background-color": app_shared_color_yellow_tint(),
      "font-weight": "bold",
      "text-align": "center",
      "font-size": size,
    });
  }
  function top_draw(go, first) {
    html_clear(screen);
    let text = app_shared_button_back_text();
    app_shared_button_uncolored(screen, text, go);
    warning_draw(first + ". Then you can pick a time for our meeting.", "");
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
  async function code_copy() {
    await clipboard_copy_browser(proof.code);
    app_shared_toast("✅ Copied code");
  }
  let confirm_first = "First confirm your " + confirmed;
  function copy_show() {
    top_draw(on_back, confirm_first);
    html_div_text(screen, "Copy this code:");
    code_draw("1.6em");
    async function copy_then_send() {
      function copy_failed() {
        return null;
      }
      await code_copy().catch(copy_failed);
      send_show();
    }
    app_shared_button_green(screen, "Copy code", copy_then_send);
  }
  function send_show() {
    top_draw(copy_show, confirm_first);
    html_div_text(screen, "Send the code to me on " + app_name + ":");
    function send_then_wait() {
      window_open(proof.send_url);
      storage_local_set(app_calendar, sent_key, proof.code);
      waiting_show();
    }
    app_shared_button_green(
      screen,
      "Send code to me on " + app_name,
      send_then_wait,
    );
    code_draw("1.2em");
    app_shared_button_uncolored(screen, "Copy code again", code_copy);
    let sent_from = messenger
      ? "Send it from the Facebook profile you want me to reach you on."
      : "Send it from the WhatsApp number you want me to reach you on.";
    let from_line = html_div_text(screen, sent_from);
    app_shared_text_deemphasized(from_line);
  }
  function waiting_show() {
    '★ WAIT IS THE MAIN THING ON THIS SCREEN (human, 2026-11-27: "Thank you for sending the code - smaller then under: Please wait until I reply to your message on WhatsApp that should be the main focus of the UI - that next step is wait"). The thanks is plain and small; the wait is the big yellow box, which also keeps the guard that nothing here reads as booked. The earlier "If God wills, I will reply on WhatsApp that I have received your code" line went, as the wait now says the same.';
    html_clear(screen);
    let text = app_shared_button_back_text();
    app_shared_button_uncolored(screen, text, on_back);
    let thanks = html_div_text(screen, "Thank you for sending the code!");
    html_centered(thanks);
    warning_draw(
      "Please wait until I reply to your message on " + app_name + ".",
      "1.4em",
    );
    html_div_text(
      screen,
      "My reply will have a link. Open it to pick a time for our meeting.",
    );
    app_shared_button_uncolored(screen, "Show your code again", copy_show);
    app_calendar_private_link_draw(screen, slug, key);
  }
  let left = storage_local_get(app_calendar, sent_key);
  if (equal(left, proof.code)) {
    waiting_show();
    return;
  }
  copy_show();
}
