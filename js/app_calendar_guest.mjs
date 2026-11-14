import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { calendar_slots_by_month } from "./calendar_slots_by_month.mjs";
import { calendar_days_by_weekday } from "./calendar_days_by_weekday.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { calendar_turnstile_widget } from "./calendar_turnstile_widget.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { each } from "./each.mjs";
import { calendar_time_local_text } from "./calendar_time_local_text.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export async function app_calendar_guest(parent, slug, key, on_key) {
  arguments_assert(arguments, 4);
  ("The booking screen a guest reaches from a host's link (#host=<slug>): the host's open hours in the guest's own clock, a short form, and after booking the code to send on WhatsApp.");
  ("key is the guest's session key from an earlier booking, or null. A first booking answers a new key, handed to on_key so the page keeps it; the guest never signs in.");
  ("A host who has set a Messenger name lets the guest pick WhatsApp or Messenger; a Messenger guest gives no number, and sends the code from Messenger instead.");
  ("Hours are drawn in the guest's own time zone, read from the browser; the booking sends that zone so the host's page can say it.");
  let card = app_shared_container(parent);
  let free = await calendar_api_call(
    "GET",
    "free",
    {
      host: slug,
    },
    null,
  );
  if (not(free.body.ok)) {
    let words = equal(free.body.reason, "no_host")
      ? "This booking link is not in use."
      : "Could not load the open hours. Try again later.";
    html_div_text(card, words);
    return;
  }
  let host = free.body.host;
  html_div_text_content(card, "Book a meeting with " + host.name);
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let zone_line = html_div_text_content(
    card,
    host.meeting_minutes +
      (host.messenger
        ? " minutes, on WhatsApp or Messenger."
        : " minutes, on WhatsApp.") +
      " Times are in your time zone: " +
      zone,
  );
  app_shared_text_deemphasized(zone_line);
  let slots = free.body.slots;
  if (equal(slots.length, 0)) {
    html_div_text(card, "No open hours in the next two weeks.");
    return;
  }
  ("A time is picked in steps: first a day of the week or, when the open hours reach into more than one month, a month; then a date; then a time. Each step has a Back button to the one before.");
  ("Rejected: month only (a guest free only on Saturdays must open every date to find them); weekday only (a guest planning a set week thinks in dates); a first screen asking which way to browse (one more press for everyone).");
  let months = calendar_slots_by_month(slots);
  let weekdays = calendar_days_by_weekday(months);
  let chosen = null;
  let chosen_line = html_div_text(card, "");
  let list = html_div(card);
  let element = html_component_element_get(list);
  element.style.maxHeight = "40vh";
  element.style.overflowY = "auto";
  function first_show() {
    chosen = null;
    html_clear(list);
    html_text_content_set(chosen_line, "Pick a day of the week:");
    for (let weekday of weekdays) {
      function weekday_pick() {
        days_show({
          label: weekday.label + "s",
          days: weekday.days,
        });
      }
      ("Weekday buttons are as wide as their word and sit side by side (human: thin, not wide), so all seven fit in a line or two.");
      let weekday_button = app_shared_button_uncolored(
        list,
        weekday.label,
        weekday_pick,
      );
      html_style_assign(weekday_button, {
        width: "auto",
        "margin-right": "0.3em",
      });
    }
    if (greater_than(months.length, 1)) {
      html_div_text(list, "Or pick a month:");
      for (let month of months) {
        function month_pick() {
          days_show({
            label: "in " + month.label,
            days: month.days,
          });
        }
        app_shared_button_uncolored(list, month.label, month_pick);
      }
    }
  }
  function days_show(group) {
    chosen = null;
    html_clear(list);
    html_text_content_set(chosen_line, "Pick a date - " + group.label + ":");
    app_shared_button_uncolored(list, "← Back", first_show);
    for (let day of group.days) {
      function day_pick() {
        times_show(group, day);
      }
      app_shared_button_uncolored(list, day.label, day_pick);
    }
  }
  function times_show(group, day) {
    chosen = null;
    html_clear(list);
    html_text_content_set(chosen_line, "Pick a time on " + day.label + ":");
    function day_back() {
      days_show(group);
    }
    app_shared_button_uncolored(list, "← Back", day_back);
    for (let time of day.times) {
      function time_pick() {
        chosen = time.slot;
        html_clear(list);
        html_text_content_set(
          chosen_line,
          "Chosen: " + day.label + ", " + time.label,
        );
        function time_back() {
          times_show(group, day);
        }
        app_shared_button_uncolored(list, "← Change time", time_back);
      }
      app_shared_button_uncolored(list, time.label, time_pick);
    }
  }
  first_show();
  html_div_text(card, "Your name");
  let name = html_input_text(card, "Your name");
  app_shared_input_style(name);
  let via = "whatsapp";
  let number_box = null;
  if (host.messenger) {
    let via_line = html_div_text(card, "Meet on: WhatsApp");
    let via_row = html_div(card);
    let via_pick = function lambda3(picked) {
      via = picked;
      let messenger = equal(picked, "messenger");
      html_text_content_set(
        via_line,
        "Meet on: " + (messenger ? "Messenger" : "WhatsApp"),
      );
      html_component_element_get(number_box).style.display = messenger
        ? "none"
        : "";
    };
    function lambda4() {
      via_pick("whatsapp");
    }
    app_shared_button_uncolored(via_row, "WhatsApp", lambda4);
    function lambda5() {
      via_pick("messenger");
    }
    app_shared_button_uncolored(via_row, "Messenger", lambda5);
  }
  number_box = html_div(card);
  html_div_text(number_box, "Your WhatsApp number");
  let whatsapp = html_input_text(number_box, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  let weekly_row = html_div(card);
  let weekly = html_input_type(weekly_row, "checkbox");
  let weekly_element = html_component_element_get(weekly);
  let weekly_label = html_div_text(
    weekly_row,
    "Repeat every week at this time",
  );
  html_component_element_get(weekly_label).style.display = "inline";
  let check = await calendar_turnstile_widget(card);
  let status = html_div_text(card, "");
  let after = html_div(parent);
  async function lambda2() {
    if (equal(chosen, null)) {
      html_text_content_set(status, "Pick a time first.");
      return;
    }
    let name_text = html_value_get(name).trim();
    if (equal(name_text, "")) {
      html_text_content_set(status, "Type your name.");
      return;
    }
    let token = check.token();
    if (equal(token, "")) {
      html_text_content_set(status, "Wait for the check above to finish.");
      return;
    }
    html_text_content_set(status, "Booking...");
    let booked = await calendar_api_call(
      "POST",
      "book",
      {
        turnstile: token,
        host: slug,
        name: name_text,
        whatsapp: html_value_get(whatsapp),
        timezone: zone,
        day: chosen.day,
        start_minute: chosen.start_minute,
        weekly: weekly_element.checked,
        via,
      },
      key,
    );
    check.reset();
    if (not(booked.body.ok)) {
      let words = {
        whatsapp: "That WhatsApp number does not look right.",
        messenger:
          "This host does not take Messenger calls now. Pick WhatsApp.",
        taken: "Someone just booked that time. Pick another.",
        not_open: "That time is no longer open. Pick another.",
        limit: "You already have 2 upcoming meetings with this host.",
        rate: "Too many tries. Wait a minute and try again.",
        turnstile: "The check failed. Try again.",
        network: "No connection. Try again.",
      };
      html_text_content_set(
        status,
        words[booked.body.reason] ?? "Could not book. Try again.",
      );
      return;
    }
    if (booked.body.key) {
      key = booked.body.key;
      on_key(key);
    }
    each([card, after], html_clear);
    let done = app_shared_container(after);
    html_div_text_content(
      done,
      "Booked: " + calendar_time_local_text(booked.body.start_utc),
    );
    let app_name = equal(via, "messenger") ? "Messenger" : "WhatsApp";
    html_div_text(
      done,
      "One more step: send this code to the host on " + app_name + ".",
    );
    html_div_text_content(done, booked.body.code);
    async function code_copy() {
      await clipboard_copy_browser(booked.body.code);
      app_shared_toast("✅ Copied code");
    }
    app_shared_button_uncolored(done, "Copy code", code_copy);
    html_a_href_text_new_tab(done, booked.body.send_url, "Open " + app_name);
    let expires = html_div_text_content(
      done,
      "If the code has not arrived by " +
        calendar_time_local_text(booked.body.expires_utc) +
        ", the booking is cancelled.",
    );
    app_shared_text_deemphasized(expires);
    let link_hint = html_div_text(
      done,
      "To see or cancel your meetings later, open this page again on this device, or keep this private link:",
    );
    app_shared_text_deemphasized(link_hint);
    let link = html_url_without_hash() + "#host=" + slug + ",key=" + key;
    html_div_text_content(done, link);
  }
  app_shared_button_green(card, "Book", lambda2);
}
