import { equal } from "./equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { week_dates } from "./week_dates.mjs";
import { date_week_sunday } from "./date_week_sunday.mjs";
import { calendar_openings_to_ranges } from "./calendar_openings_to_ranges.mjs";
import { week_calendar } from "./week_calendar.mjs";
import { calendar_ranges_to_openings } from "./calendar_ranges_to_openings.mjs";
import { html_div } from "./html_div.mjs";
import { app_calendar_meetings } from "./app_calendar_meetings.mjs";
export async function app_calendar_host(parent, key) {
  arguments_assert(arguments, 2);
  ("The host's screen, for a signed-in host's session key: who they are (name, WhatsApp, time zone), their booking link, their weekly free hours on the grid, and every upcoming meeting with the ones waiting for a code on top of what to do.");
  ("Answers false when the key is no longer a host session, so the page can sign in again; true once drawn.");
  ("A change on the grid saves at once as the schedule in force from today; days before today keep the hours they had, since a schedule only ever starts on a date.");
  let read = await calendar_api_call("GET", "settings", {}, key);
  if (not(read.body.ok)) {
    return false;
  }
  let settings = read.body.settings;
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let me = app_shared_container(parent);
  html_div_text(me, "You");
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
  let me_status = html_div_text(me, "");
  async function lambda() {
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
    html_text_content_set(
      me_status,
      saved.body.ok
        ? "Saved."
        : equal(saved.body.reason, "whatsapp")
          ? "That WhatsApp number does not look right."
          : "Could not save. Try again.",
    );
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
  let link_line = html_div_text(link_card, "");
  let show_link = function lambda2(s) {
    html_text_content_set(
      link_line,
      s ? html_url_without_hash() + "#host=" + s : "",
    );
  };
  show_link(host ? host.slug : "");
  async function lambda3() {
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
      return;
    }
    let words = {
      slug: "Use 2 to 40 lowercase letters, digits or _.",
      slug_taken: "Another host has that name. Pick another.",
      no_person: "Save your name and number above first.",
    };
    html_text_content_set(
      link_line,
      words[saved.body.reason] ?? "Could not save. Try again.",
    );
  }
  app_shared_button_green(link_card, "Save link", lambda3);
  let hours_card = app_shared_container(parent);
  html_div_text(hours_card, "Your weekly free hours");
  let hours_status = html_div_text(hours_card, "");
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
    html_text_content_set(hours_status, "Saving...");
    let saved = await calendar_api_call(
      "POST",
      "schedule_save",
      {
        from_day: today,
        openings: calendar_ranges_to_openings(ranges, dates),
      },
      key,
    );
    html_text_content_set(
      hours_status,
      saved.body.ok
        ? "Saved."
        : equal(saved.body.reason, "no_host")
          ? "Save your booking link above first."
          : "Could not save. Try again.",
    );
  }
  week_calendar(hours_card, dates, initial, lambda6);
  let box = html_div(parent);
  await app_calendar_meetings(box, key);
  return true;
}
