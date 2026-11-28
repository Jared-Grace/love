import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { calendar_person_label } from "./calendar_person_label.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { html_clear } from "./html_clear.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_proofs_waiting(
  box,
  proofs,
  key,
  link,
  on_confirmed,
) {
  arguments_assert(arguments, 5);
  ("link is the host's booking link, put in the reply so the guest can open it and pick a time (human, 2026-11-27: \"After receiving code, could I just send them the URL to schedule a meeting? and next time they refresh the url they'll have a choice to schedule a meeting?\"). It opens the guest's own page because their key stays on their device. null where no link is known; the reply then says to open the page again.");
  ("Draws, inside box, the guests waiting for the host to see their code arrive - each with the code, a place to say who it came from, and Confirm. Nothing is drawn when none wait.");
  ("★ THE HOST TYPES THE NUMBER THEY SEE, NEVER ONE FILLED IN. A WhatsApp proof is the number the code arrived from, so the box starts empty: filled with the number the guest typed, a Confirm would prove nothing. A Messenger proof is the same with the profile link the code arrived from.");
  ("Once confirmed, a short message to send the guest is shown with Copy and a link that opens the chat, because the guest is waiting to hear back before they can pick a time. on_confirmed then draws the host's lists again.");
  if (equal(proofs.length, 0)) {
    return;
  }
  let heading = app_shared_heading(box, "Waiting for a code");
  html_centered(heading);
  for (let proof of proofs) {
    let card = app_shared_container_centered(box);
    let messenger = equal(proof.via, "messenger");
    let app_name = messenger ? "Messenger" : "WhatsApp";
    let who = calendar_person_label(
      proof.name,
      proof.whatsapp,
      proof.profile_given,
    );
    html_div_text_content(
      card,
      who + " - code " + proof.code + " on " + app_name,
    );
    let status = html_div_text(card, "");
    let sender = null;
    if (messenger) {
      ('THE HOST PASTES THE PROFILE THEY SEE, as on WhatsApp the number (human, 2026-11-28, chose "Treat Messenger the same as WhatsApp"): the guest types no link, so the box starts empty and what is pasted becomes their profile.');
      let hint = html_div_text(
        card,
        "When the code arrives, open the sender's profile and paste its link. That becomes their profile:",
      );
      app_shared_text_deemphasized(hint);
      sender = html_input_text(card, "facebook.com/their.name");
      app_shared_input_style(sender);
    } else {
      let hint2 = html_div_text(
        card,
        "When the code arrives, type the number it came from. That becomes their number:",
      );
      app_shared_text_deemphasized(hint2);
      sender = html_input_text(card, "+1 555 123 4567");
      app_shared_input_style(sender);
    }
    async function proof_confirm() {
      let typed = html_value_get(sender);
      let confirm_body = messenger
        ? {
            via: "messenger",
            code: proof.code,
            profile: typed,
          }
        : {
            code: proof.code,
            whatsapp: typed,
          };
      let sent = await calendar_api_call("POST", "confirm", confirm_body, key);
      if (not(sent.body.ok)) {
        let words = {
          number: "Type the number the code came from, like +1 555 123 4567.",
          profile: "Paste a Facebook or Messenger profile link.",
          no_code: "That code is not waiting any more.",
        };
        let text = property_get_or(
          words,
          sent.body.reason,
          "Could not confirm. Try again.",
        );
        ('THE ANSWER SHOWS WHERE CONFIRM WAS PRESSED (human, 2026-11-28: "clicked confirm in waiting for code - nothing changed? page just reloaded"): a refusal is red, with a toast, and a yes replaces this card with the reply, instead of a plain line above the box and a card added below every other one, off screen.');
        html_text_content_set(status, "❌ " + text);
        html_style_assign(status, {
          color: app_shared_color_red(),
          "font-weight": "bold",
        });
        app_shared_toast("❌ " + text);
        return;
      }
      app_shared_toast("✅ Confirmed " + who);
      let reply = link
        ? "Thank you, I got your code. Now pick a time for our meeting here: " +
          link
        : "Thank you, I got your code. Now open the page again and pick a time for our meeting.";
      html_clear(card);
      let reply_card = card;
      html_div_text(reply_card, "✅ Confirmed. Send " + who + " this:");
      html_div_text_content(reply_card, reply);
      async function reply_copy() {
        await clipboard_copy_browser(reply);
        app_shared_toast("✅ Copied");
      }
      app_shared_button_uncolored(reply_card, "Copy", reply_copy);
      let chat = messenger
        ? typed
        : "https://wa.me/" +
          String(typed).replace(/\D/g, "") +
          "?text=" +
          encodeURIComponent(reply);
      html_a_href_text_new_tab(reply_card, chat, "Open the chat");
      app_shared_button_green(reply_card, "Done", on_confirmed);
    }
    app_shared_button_green(card, "Confirm", proof_confirm);
  }
}
