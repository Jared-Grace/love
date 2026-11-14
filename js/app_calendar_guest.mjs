import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { calendar_time_local_text } from "./calendar_time_local_text.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { calendar_turnstile_widget } from "./calendar_turnstile_widget.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
export async function app_calendar_guest(parent, slug, key, on_key) {
  arguments_assert(arguments, 4);
  ("The booking screen a guest reaches from a host's link (#host=<slug>): the host's open hours in the guest's own clock, a short form, and after booking the code to send on WhatsApp.");
  ("key is the guest's session key from an earlier booking, or null. A first booking answers a new key, handed to on_key so the page keeps it; the guest never signs in.");
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
  html_div_text_content(card, "Book a prayer call with " + host.name);
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let zone_line = html_div_text_content(
    card,
    host.meeting_minutes +
      " minutes, on WhatsApp. Times are in your time zone: " +
      zone,
  );
  app_shared_text_deemphasized(zone_line);
  let slots = free.body.slots;
  if (equal(slots.length, 0)) {
    html_div_text(card, "No open hours in the next two weeks.");
    return;
  }
  let chosen = null;
  let chosen_line = html_div_text(card, "Pick a time:");
  let list = html_div(card);
  let element = html_component_element_get(list);
  element.style.maxHeight = "40vh";
  element.style.overflowY = "auto";
  for (let slot of slots) {
    let label = calendar_time_local_text(slot.start_utc);
    function lambda() {
      chosen = slot;
      html_text_content_set(chosen_line, "Chosen: " + label);
    }
    app_shared_button_uncolored(list, label, lambda);
  }
  html_div_text(card, "Your name");
  let name = html_input_text(card, "Your name");
  app_shared_input_style(name);
  html_div_text(card, "Your WhatsApp number");
  let whatsapp = html_input_text(card, "+1 555 123 4567");
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
      },
      key,
    );
    check.reset();
    if (not(booked.body.ok)) {
      let words = {
        whatsapp: "That WhatsApp number does not look right.",
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
    html_div_text(
      done,
      "One more step: send this code to the host on WhatsApp.",
    );
    html_div_text_content(done, booked.body.code);
    async function code_copy() {
      await clipboard_copy_browser(booked.body.code);
      app_shared_toast("✅ Copied code");
    }
    app_shared_button_uncolored(done, "Copy code", code_copy);
    html_a_href_text_new_tab(done, booked.body.send_url, "Open WhatsApp");
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
