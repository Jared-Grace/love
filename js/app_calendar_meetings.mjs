import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_time_local_text } from "./calendar_time_local_text.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export async function app_calendar_meetings(box, key) {
  arguments_assert(arguments, 2);
  ("Draws, inside box, every upcoming meeting the session key belongs to - the ones it booked and the ones it hosts - soonest first, and draws them again after any change.");
  ("A meeting still waiting says so. The guest sees the code and a button that opens WhatsApp to the host with it typed, to send again. The host sees who booked and a place to type the number the code came from, then confirm. Both may cancel.");
  ("Everything a guest typed is drawn as plain text, never markup, because the host's page shows it.");
  html_clear(box);
  let answer = await calendar_api_call("GET", "upcoming", {}, key);
  if (not(answer.body.ok)) {
    html_div_text(box, "Could not load your meetings. Try again later.");
    return;
  }
  let meetings = answer.body.meetings;
  html_div_text(box, "Your meetings");
  if (equal(meetings.length, 0)) {
    let none = html_div_text(box, "None yet.");
    app_shared_text_deemphasized(none);
    return;
  }
  for (let meeting of meetings) {
    let card = app_shared_container(box);
    let when = calendar_time_local_text(meeting.next_utc);
    let repeat = meeting.weekly ? " (every week)" : "";
    html_div_text_content(card, when + repeat);
    let other = meeting.other;
    let with_whom = meeting.hosting ? "Booked by " : "With ";
    html_div_text_content(card, with_whom + other.name);
    let digits = String(other.whatsapp).replace(/\D/g, "");
    let status = html_div_text(card, "");
    if (meeting.waiting) {
      html_text_content_set(
        status,
        "Waiting for code " + meeting.code + " on WhatsApp",
      );
      if (meeting.hosting) {
        let number_hint = html_div_text(
          card,
          "When the code arrives, type the number it came from:",
        );
        app_shared_text_deemphasized(number_hint);
        let number = html_input_text(card, "+1 555 123 4567");
        app_shared_input_style(number);
        async function lambda() {
          let sent = await calendar_api_call(
            "POST",
            "confirm",
            {
              code: meeting.code,
              whatsapp: html_value_get(number),
            },
            key,
          );
          if (not(sent.body.ok)) {
            let words = {
              number: "That number did not book this meeting.",
              no_code: "That code is not waiting any more.",
            };
            html_text_content_set(
              status,
              words[sent.body.reason] ?? "Could not confirm. Try again.",
            );
            return;
          }
          await app_calendar_meetings(box, key);
        }
        app_shared_button_green(card, "Confirm", lambda);
      } else {
        html_a_href_text_new_tab(
          card,
          "https://wa.me/" +
            digits +
            "?text=" +
            encodeURIComponent(meeting.code),
          "Send the code on WhatsApp",
        );
      }
    } else {
      html_text_content_set(status, "Confirmed");
      if (meeting.hosting) {
        html_a_href_text_new_tab(
          card,
          "https://wa.me/" + digits,
          "Message on WhatsApp",
        );
      }
    }
    async function lambda2() {
      let cancelled = await calendar_api_call(
        "POST",
        "cancel",
        {
          id: meeting.id,
        },
        key,
      );
      if (not(cancelled.body.ok)) {
        html_text_content_set(status, "Could not cancel. Try again.");
        return;
      }
      await app_calendar_meetings(box, key);
    }
    app_shared_button_red(card, "Cancel", lambda2);
  }
}
