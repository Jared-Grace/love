import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_container_centered } from "./app_shared_container_centered.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_proofs_waiting(box, proofs, key, on_confirmed) {
  arguments_assert(arguments, 4);
  ("Draws, inside box, the guests waiting for the host to see their code arrive - each with the code, a place to say who it came from, and Confirm. Nothing is drawn when none wait.");
  ("★ THE HOST TYPES THE NUMBER THEY SEE, NEVER ONE FILLED IN. A WhatsApp proof is the number the code arrived from, so the box starts empty: filled with the number the guest typed, a Confirm would prove nothing. A Messenger sender has no number to type, so the link the guest gave is filled in to check against the profile that sent the code, or to be replaced by the real one.");
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
    html_div_text_content(
      card,
      proof.name + " - code " + proof.code + " on " + app_name,
    );
    let status = html_div_text(card, "");
    let sender = null;
    if (messenger) {
      html_a_href_text_new_tab(
        card,
        proof.profile_given,
        "Open the profile they gave",
      );
      let hint = html_div_text(
        card,
        "When the code arrives, check the link below is the profile that sent it, then Confirm:",
      );
      app_shared_text_deemphasized(hint);
      sender = html_input_text(card, "facebook.com/their.name");
      app_shared_input_style(sender);
      html_value_set(sender, proof.profile_given);
    } else {
      let hint2 = html_div_text(
        card,
        "When the code arrives, type the number it came from:",
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
          number:
            "That is not the number they gave. Check it, or ask them to change it.",
          profile: "Paste a Facebook or Messenger profile link.",
          no_code: "That code is not waiting any more.",
        };
        let text = property_get_or(
          words,
          sent.body.reason,
          "Could not confirm. Try again.",
        );
        html_text_content_set(status, text);
        return;
      }
      app_shared_toast("✅ Confirmed " + proof.name);
      let reply =
        "Thank you, I got your code. Now open your link again and pick a time.";
      let reply_card = app_shared_container_centered(box);
      html_div_text(reply_card, "Send " + proof.name + " this:");
      html_div_text_content(reply_card, reply);
      async function reply_copy() {
        await clipboard_copy_browser(reply);
        app_shared_toast("✅ Copied");
      }
      app_shared_button_uncolored(reply_card, "Copy", reply_copy);
      let chat = messenger
        ? html_value_get(sender)
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
