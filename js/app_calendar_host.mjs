import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_toast_saving } from "./app_shared_toast_saving.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { equal } from "./equal.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { html_text_get } from "./html_text_get.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { week_dates } from "./week_dates.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { calendar_openings_to_ranges } from "./calendar_openings_to_ranges.mjs";
import { calendar_ranges_to_openings } from "./calendar_ranges_to_openings.mjs";
import { week_calendar } from "./week_calendar.mjs";
import { html_div } from "./html_div.mjs";
import { app_calendar_meetings } from "./app_calendar_meetings.mjs";
export async function app_calendar_host(parent, key) {
  arguments_assert(arguments, 2);
  ("The host's screen, for a signed-in host's session key: who they are (name, WhatsApp, time zone), their booking link, their weekly free hours on the grid, and every upcoming meeting with the ones waiting for a code on top of what to do.");
  ("Booking rules: a Messenger name lets guests choose Messenger, and the most meetings in one day caps each day; blank means unlimited, and the page says so.");
  ("Answers false when the key is no longer a host session, so the page can sign in again; true once drawn.");
  ("A change on the grid saves at once as the schedule in force from today; days before today keep the hours they had, since a schedule only ever starts on a date.");
  let read = await calendar_api_call("GET", "settings", {}, key);
  if (not(read.body.ok)) {
    return false;
  }
  let settings = read.body.settings;
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let me = app_shared_container(parent);
  html_div_text(me, "Your name");
  let name = html_input_text(me, "Your name");
  app_shared_input_style(name);
  html_div_text(me, "Your WhatsApp number - guests send their code here");
  let whatsapp = html_input_text(me, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  let person = settings.person;
  if (person) {
    html_value_set(name, person.name);
    html_value_set(whatsapp, person.whatsapp);
  }
  let zone_line = html_div_text_content(me, "Time zone: " + zone);
  app_shared_text_deemphasized(zone_line);
  async function lambda() {
    await app_shared_toast_saving(person_save);
  }
  async function person_save() {
    let saved = await calendar_api_call(
      "POST",
      "person_save",
      {
        name: html_value_get(name).trim(),
        whatsapp: html_value_get(whatsapp),
        timezone: zone,
      },
      key,
    );
    let told = saved.body.ok
      ? "Saved."
      : equal(saved.body.reason, "whatsapp")
        ? "That WhatsApp number does not look right."
        : "Could not save. Try again.";
    return told;
  }
  app_shared_button_green(me, "Save", lambda);
  let link_card = app_shared_container(parent);
  html_div_text(
    link_card,
    "Your booking link name (lowercase letters, digits, _)",
  );
  let slug = html_input_text(link_card, "your_name");
  app_shared_input_style(slug);
  let host = settings.host;
  if (host) {
    html_value_set(slug, host.slug);
  }
  app_shared_button_green(link_card, "Save link", lambda3);
  let link_line = html_div_text(link_card, "");
  let show_link = function lambda2(s) {
    html_text_content_set(
      link_line,
      s ? html_url_without_hash() + "#host=" + s : "",
    );
  };
  show_link(host ? host.slug : "");
  async function link_copy() {
    let link = html_text_get(link_line);
    if (equal(link, "")) {
      app_shared_toast("Save your link name first.");
      return;
    }
    await clipboard_copy_browser(link);
    app_shared_toast("✅ Copied link");
  }
  app_shared_button_uncolored(link_card, "Copy link", link_copy);
  async function lambda3() {
    await app_shared_toast_saving(link_save);
  }
  async function link_save() {
    let s = html_value_get(slug).trim();
    let saved = await calendar_api_call(
      "POST",
      "host_save",
      {
        slug: s,
        block_minutes: 60,
        meeting_minutes: 25,
      },
      key,
    );
    if (saved.body.ok) {
      show_link(s);
      let r2 = "Saved.";
      return r2;
    }
    let words = {
      slug: "Use 2 to 40 lowercase letters, digits or _.",
      slug_taken: "Another host has that name. Pick another.",
      no_person: "Save your name and number above first.",
    };
    let told = words[saved.body.reason] ?? "Could not save. Try again.";
    return told;
  }
  let rules_card = app_shared_container(parent);
  html_div_text(rules_card, "Booking rules");
  html_div_text(
    rules_card,
    "Your Messenger name - leave blank to take WhatsApp calls only",
  );
  let messenger = html_input_text(rules_card, "m.me/your.name");
  app_shared_input_style(messenger);
  html_div_text(
    rules_card,
    "Most meetings in one day - leave blank for unlimited",
  );
  let max = html_input_text(rules_card, "Unlimited");
  app_shared_input_style(max);
  let max_line = html_div_text(rules_card, "");
  app_shared_text_deemphasized(max_line);
  let max_show = function lambda7(saved_max) {
    html_text_content_set(
      max_line,
      equal(saved_max, null)
        ? "Now: unlimited meetings a day"
        : "Now: at most " + saved_max + " meetings a day",
    );
  };
  if (host) {
    html_value_set(messenger, host.messenger);
    html_value_set(
      max,
      equal(host.max_per_day, null) ? "" : String(host.max_per_day),
    );
  }
  max_show(host ? host.max_per_day : null);
  async function rules_save() {
    let max_text = html_value_get(max).trim();
    let saved = await calendar_api_call(
      "POST",
      "host_rules_save",
      {
        messenger: html_value_get(messenger),
        max: max_text,
      },
      key,
    );
    if (saved.body.ok) {
      max_show(equal(max_text, "") ? null : Number(max_text));
      let r3 = "Saved.";
      return r3;
    }
    let words = {
      messenger:
        "That Messenger name does not look right. Use the part after m.me/.",
      max: "Type a number from 1 to 24, or leave it blank for unlimited.",
      no_host: "Save your booking link above first.",
    };
    let r4 = words[saved.body.reason] ?? "Could not save. Try again.";
    return r4;
  }
  async function lambda8() {
    await app_shared_toast_saving(rules_save);
  }
  app_shared_button_green(rules_card, "Save rules", lambda8);
  let hours_card = app_shared_container(parent);
  html_div_text(hours_card, "Your weekly free hours");
  let today = date_today_iso();
  let sunday_iso = date_week_sunday(today);
  let dates = week_dates(sunday_iso);
  function lambda4(s) {
    let le = less_than_equal(s.from_day, today);
    return le;
  }
  function lambda5(a, b) {
    let r = less_than(a.from_day, b.from_day) ? -1 : 1;
    return r;
  }
  let schedules = settings.schedules.filter(lambda4).sort(lambda5);
  let current = schedules.length
    ? schedules[subtract(schedules.length, 1)].openings
    : [];
  let initial = calendar_openings_to_ranges(current, dates);
  async function lambda6(ranges) {
    async function hours_save() {
      let saved = await calendar_api_call(
        "POST",
        "schedule_save",
        {
          from_day: today,
          openings: calendar_ranges_to_openings(ranges, dates),
        },
        key,
      );
      let told = saved.body.ok
        ? "Saved."
        : equal(saved.body.reason, "no_host")
          ? "Save your booking link above first."
          : "Could not save. Try again.";
      return told;
    }
    await app_shared_toast_saving(hours_save);
  }
  week_calendar(hours_card, dates, initial, lambda6, true);
  let box = html_div(parent);
  await app_calendar_meetings(box, key);
  return true;
}
