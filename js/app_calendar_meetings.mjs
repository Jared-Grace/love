import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { equal } from "./equal.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_time_local_text } from "./calendar_time_local_text.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_button_red } from "./app_shared_button_red.mjs";
export async function app_calendar_meetings(box, key, on_change, empty_shown) {
  arguments_assert(arguments, 4);
  ('empty_shown says whether an empty list still draws, as "Your meetings" over "None yet.". The host\'s page passes true, because no bookings is news to a host. The guest\'s page passes false and draws nothing, because the list sits at the top of the guest\'s page, and an empty heading there is the first thing a returning guest would see while telling them nothing.');
  ("on_change runs after a cancel, so whatever else the page shows can catch up - the guest's open hours above, where the freed time must show again (a cancel left a weekday saying it was unavailable until the page was reloaded).");
  ("Draws, inside box, every upcoming meeting the session key belongs to - the ones it booked and the ones it hosts - soonest first, and draws them again after any change.");
  ("A meeting still waiting says so. The guest sees the code and a button that opens WhatsApp to the host with it typed, to send again. The host sees who booked and a place to type the number the code came from, then confirm. Both may cancel.");
  ("A Messenger meeting is confirmed with the link to the sender's profile instead of a number, and once confirmed the host can open that profile.");
  ("Everything a guest typed is drawn as plain text, never markup, because the host's page shows it.");
  html_clear(box);
  let answer = await calendar_api_call("GET", "upcoming", {}, key);
  if (not(answer.body.ok)) {
    html_div_text(box, "Could not load your meetings. Try again later.");
    return;
  }
  let meetings = answer.body.meetings;
  let empty = equal(meetings.length, 0);
  if (empty && not(empty_shown)) {
    return;
  }
  html_div_text(box, "Your meetings");
  if (empty) {
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
    let messenger = equal(meeting.via, "messenger");
    let app_name = messenger ? "Messenger" : "WhatsApp";
    if (meeting.waiting) {
      html_text_content_set(
        status,
        "Waiting for code " + meeting.code + " on " + app_name,
      );
      if (meeting.hosting && messenger) {
        ("The guest typed their own profile link when booking; it is shown to open and filled in below, so the host confirms as it is when the code came from that profile, or pastes the real sender's link when it did not.");
        if (meeting.profile_url) {
          html_a_href_text_new_tab(
            card,
            meeting.profile_url,
            "Open the profile they gave",
          );
        }
        let profile_hint = html_div_text(
          card,
          "When the code arrives, check the link below is the profile that sent it, then Confirm:",
        );
        app_shared_text_deemphasized(profile_hint);
        let profile = html_input_text(card, "facebook.com/their.name");
        app_shared_input_style(profile);
        if (meeting.profile_url) {
          html_value_set(profile, meeting.profile_url);
        }
        async function profile_confirm() {
          let sent = await calendar_api_call(
            "POST",
            "confirm",
            {
              via: "messenger",
              code: meeting.code,
              profile: html_value_get(profile),
            },
            key,
          );
          if (not(sent.body.ok)) {
            let words = {
              profile: "Paste a Facebook or Messenger profile link.",
              no_code: "That code is not waiting any more.",
            };
            html_text_content_set(
              status,
              words[sent.body.reason] ?? "Could not confirm. Try again.",
            );
            return;
          }
          await app_calendar_meetings(box, key, on_change, empty_shown);
        }
        app_shared_button_green(card, "Confirm", profile_confirm);
      } else if (meeting.hosting) {
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
          await app_calendar_meetings(box, key, on_change, empty_shown);
        }
        app_shared_button_green(card, "Confirm", lambda);
      } else {
        html_a_href_text_new_tab(
          card,
          meeting.send_url,
          "Send the code on " + app_name,
        );
      }
    } else {
      html_text_content_set(status, "Confirmed on " + app_name);
      if (meeting.hosting && messenger && meeting.profile_url) {
        html_a_href_text_new_tab(
          card,
          meeting.profile_url,
          "Open their profile",
        );
      } else if (meeting.hosting && not(messenger)) {
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
      await app_calendar_meetings(box, key, on_change, empty_shown);
      await on_change();
    }
    app_shared_button_red(card, "Cancel", lambda2);
  }
}
