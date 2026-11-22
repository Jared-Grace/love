import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { equal } from "./equal.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_toast_saving } from "./app_shared_toast_saving.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export function app_calendar_host_rules(area, key, settings) {
  arguments_assert(arguments, 3);
  ("Booking rules: a Messenger name lets guests choose Messenger, the most meetings in one day caps each day, and the most per guest caps how many upcoming meetings one guest holds (a weekly one counting once); blank means unlimited, and the screen says so.");
  ('2026-11-15: asks for the link, since that is what a host has to hand and the reader takes a whole link (human: "It says messenger name - but the field shows URL - does it want just the /... part or the whole url?").');
  let messenger_field = app_shared_field(area);
  html_div_text(
    messenger_field,
    "Your Facebook profile link - leave blank to take WhatsApp calls only",
  );
  let messenger = html_input_text(messenger_field, "facebook.com/your.name");
  let messenger_hint = html_div_text(
    messenger_field,
    "On Facebook, open your profile, then copy the link from the address bar or from Share.",
  );
  app_shared_text_deemphasized(messenger_hint);
  app_shared_input_style(messenger);
  let max_field = app_shared_field(area);
  html_div_text(max_field, "Max meetings per day - leave blank for unlimited");
  let max = html_input_text(max_field, "Unlimited");
  app_shared_input_style(max);
  let max_line = html_div_text(max_field, "");
  app_shared_text_deemphasized(max_line);
  function max_show(saved_max) {
    html_text_content_set(
      max_line,
      equal(saved_max, null)
        ? "Now: unlimited meetings a day"
        : "Now: at most " + saved_max + " meetings a day",
    );
  }
  let max_guest_field = app_shared_field(area);
  html_div_text(
    max_guest_field,
    "Max upcoming meetings per guest - a weekly meeting counts as 1; leave blank for unlimited",
  );
  let max_guest = html_input_text(max_guest_field, "Unlimited");
  app_shared_input_style(max_guest);
  let max_guest_line = html_div_text(max_guest_field, "");
  app_shared_text_deemphasized(max_guest_line);
  function max_guest_show(saved_max) {
    html_text_content_set(
      max_guest_line,
      equal(saved_max, null)
        ? "Now: a guest may hold any number of meetings"
        : "Now: at most " + saved_max + " upcoming meetings per guest",
    );
  }
  let host = settings.host;
  if (host) {
    html_value_set(messenger, host.messenger);
    html_value_set(
      max,
      equal(host.max_per_day, null) ? "" : String(host.max_per_day),
    );
    html_value_set(
      max_guest,
      equal(host.max_per_guest, null) ? "" : String(host.max_per_guest),
    );
  }
  max_show(host ? host.max_per_day : null);
  max_guest_show(host ? host.max_per_guest : 2);
  async function rules_save() {
    let max_text = html_value_get(max).trim();
    let max_guest_text = html_value_get(max_guest).trim();
    let saved = await calendar_api_call(
      "POST",
      "host_rules_save",
      {
        messenger: html_value_get(messenger),
        max: max_text,
        max_guest: max_guest_text,
      },
      key,
    );
    if (saved.body.ok) {
      max_show(equal(max_text, "") ? null : Number(max_text));
      max_guest_show(equal(max_guest_text, "") ? null : Number(max_guest_text));
      let done = "Saved.";
      return done;
    }
    let words = {
      messenger:
        "That link does not look right. Paste the link to your own Facebook profile.",
      max: "Type a number from 1 to 24, or leave it blank for unlimited.",
      max_guest:
        "Type a number from 1 to 24 for meetings per guest, or leave it blank for unlimited.",
      no_host: "Save your booking link name in About you first.",
    };
    let told = property_get_or(
      words,
      saved.body.reason,
      "Could not save. Try again.",
    );
    return told;
  }
  async function save_press() {
    await app_shared_toast_saving(rules_save);
  }
  app_shared_button_green(area, "Save rules", save_press);
}
