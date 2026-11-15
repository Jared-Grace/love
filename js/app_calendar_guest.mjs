import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { calendar_slots_by_month } from "./calendar_slots_by_month.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_unavailable_box } from "./app_shared_unavailable_box.mjs";
import { calendar_days_by_weekday } from "./calendar_days_by_weekday.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { calendar_turnstile_widget } from "./calendar_turnstile_widget.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_loading } from "./html_loading.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { calendar_time_range_local_text } from "./calendar_time_range_local_text.mjs";
import { clipboard_copy_browser } from "./clipboard_copy_browser.mjs";
import { app_shared_toast } from "./app_shared_toast.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { calendar_time_local_text } from "./calendar_time_local_text.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
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
    key,
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
  ('The length stands out on its own line, as big as a heading (human: "What about making the 25 minutes stand out more visually?").');
  app_shared_heading(card, host.meeting_minutes + " minutes (or less)");
  let zone_line = html_div_text_content(
    card,
    (host.messenger ? "On WhatsApp or Messenger." : "On WhatsApp.") +
      " Times are in your time zone: " +
      zone,
  );
  app_shared_text_deemphasized(zone_line);
  ('A guest already holding the most meetings this host allows sees no hours, only how to free one: their meetings are drawn above, each with a Cancel, and a cancel draws this screen again (human: "so that you only see existing meeting, and you can cancel to schedule a new one").');
  let guest = free.body.guest;
  if (guest && guest.full) {
    html_div_text(
      card,
      "You have " +
        guest.held +
        (equal(guest.held, 1) ? " upcoming meeting" : " upcoming meetings") +
        " with " +
        host.name +
        ", the most allowed. To book another time, cancel one first.",
    );
    return;
  }
  ('The app choice comes first and big (human: "They should have a big choice: Facebook Messenger meeting or WhatsApp meeting"); what is asked for below follows it - a WhatsApp number, or a Facebook profile link.');
  let via_area = app_shared_field(card);
  let slots = free.body.slots;
  if (equal(slots.length, 0)) {
    html_div_text(card, "No open hours in the next two weeks.");
    return;
  }
  ("A time is picked in steps: first a day of the week or, when the open hours reach into more than one month, a month; then a date; then a time. Each step has a Back button to the one before.");
  ("Rejected: month only (a guest free only on Saturdays must open every date to find them); weekday only (a guest planning a set week thinks in dates); a first screen asking which way to browse (one more press for everyone).");
  ("A weekday, month or date with no open hour - closed, or fully booked - shows as text saying it is unavailable, never as a button (human: \"Instead of a button, text should say 'x is unavailable'\").");
  let now_iso = new Date().toISOString();
  let months = calendar_slots_by_month(slots, now_iso);
  function days_open(days) {
    function lambda(d) {
      let g = greater_than(d.times.length, 0);
      return g;
    }
    let r = days.some(lambda);
    return r;
  }
  function unavailable_show(words, tail) {
    let line = app_shared_unavailable_box(list, words + " unavailable" + tail);
    return line;
  }
  let weekdays = calendar_days_by_weekday(months);
  let chosen = null;
  ("marked is the problem now ringed in red, or null. It is declared here, above every button, because a press can land while the spam check below is still loading, and a name declared after that wait does not exist yet - picking an app then threw and drew nothing.");
  let marked = null;
  ('The prompt and its buttons sit in one field, spaced off from what follows like the host\'s fields (human: "Pick a day of the week and its buttons should look like a group").');
  let pick_field = app_shared_field(card);
  let chosen_line = html_div_text(pick_field, "");
  ('The picked date and time stand out larger than the prompts before it (human: "choosen date/time should be larger font").');
  function chosen_line_set(words, big) {
    html_text_content_set(chosen_line, words);
    html_style_assign(chosen_line, {
      "font-size": big ? "1.3em" : "",
      "font-weight": big ? "bold" : "",
    });
  }
  let list = html_div(pick_field);
  let element = html_component_element_get(list);
  element.style.maxHeight = "40vh";
  element.style.overflowY = "auto";
  function first_show() {
    chosen = null;
    html_clear(list);
    chosen_line_set("Pick a day of the week:", false);
    for (let weekday of weekdays) {
      let b = days_open(weekday.days);
      if (not(b)) {
        ('"right now" because a weekday comes again: it is only full or closed inside the next two weeks.');
        let closed_line = unavailable_show(
          weekday.label + "s are",
          " right now",
        );
        html_style_assign(closed_line, {
          display: "inline-block",
          width: "auto",
          "margin-right": "0.3em",
        });
        continue;
      }
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
        let b2 = days_open(month.days);
        if (not(b2)) {
          unavailable_show(month.label + " is", "");
          continue;
        }
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
    chosen_line_set("Pick a date - " + group.label + ":", false);
    app_shared_button_uncolored(list, "← Back", first_show);
    for (let day of group.days) {
      if (equal(day.times.length, 0)) {
        unavailable_show(day.label + " is", "");
        continue;
      }
      function day_pick() {
        times_show(group, day);
      }
      app_shared_button_uncolored(list, day.label, day_pick);
    }
  }
  function times_show(group, day) {
    chosen = null;
    html_clear(list);
    chosen_line_set("Pick a time on " + day.label + ":", false);
    function day_back() {
      days_show(group);
    }
    app_shared_button_uncolored(list, "← Back", day_back);
    for (let time of day.times) {
      function time_pick() {
        chosen = time.slot;
        problems_recheck();
        html_clear(list);
        chosen_line_set("Chosen: " + day.label + ", " + time.label, true);
        function time_back() {
          times_show(group, day);
        }
        app_shared_button_uncolored(list, "← Change time", time_back);
      }
      app_shared_button_uncolored(list, time.label, time_pick);
    }
  }
  first_show();
  let name_field = app_shared_field(card);
  html_div_text(name_field, "Your name on Facebook");
  let name = html_input_text(name_field, "Your name");
  app_shared_input_style(name);
  ('Both fields show whenever the host takes Messenger; the one the chosen app needs says "required", the other "optional" (human: "fields for both Facebook Profile URL and WhatsApp number, but which one is required depends on which one you select").');
  let number_box = app_shared_field(card);
  let number_label = html_div_text(number_box, "");
  let whatsapp = html_input_text(number_box, "+1 555 123 4567");
  app_shared_input_style(whatsapp);
  let profile_box = app_shared_field(card);
  let profile_label = html_div_text(profile_box, "");
  let profile = html_input_text(profile_box, "facebook.com/your.name");
  app_shared_input_style(profile);
  let profile_hint = html_div_text(
    profile_box,
    "On Facebook, open your profile, then copy the link from the address bar or from Share.",
  );
  app_shared_text_deemphasized(profile_hint);
  ("A host with no Messenger name takes WhatsApp only, so there is no choice to make; otherwise nothing is picked until the guest picks.");
  let via = host.messenger ? null : "whatsapp";
  ('What the guest typed last time on this device fills the form again, so a cancel and a fresh booking asks for nothing twice (human: "if they cancel and re-book their previous choices for name,url,and phone number are pre-populated").');
  ("Rejected: keeping them on the server with the guest's key (a Worker change and a new place a person's name sits on the cloud, for a convenience the device already gives).");
  let last = storage_local_get(app_calendar, "guest_details");
  if (last) {
    html_value_set(name, last.name);
    html_value_set(whatsapp, last.whatsapp);
    html_value_set(profile, last.profile);
    if (host.messenger) {
      via = last.via;
    }
  }
  function field_label_set(label, words, value) {
    let need = equal(via, null)
      ? ""
      : equal(via, value)
        ? " (required)"
        : " (optional)";
    html_text_content_set(label, words + need);
  }
  function via_draw() {
    html_clear(via_area);
    field_label_set(number_label, "Your WhatsApp number", "whatsapp");
    field_label_set(profile_label, "Your Facebook profile link", "messenger");
    if (not(host.messenger)) {
      html_text_content_set(number_label, "Your WhatsApp number");
      html_component_element_get(profile_box).style.display = "none";
      return;
    }
    html_div_text(via_area, "How do you want to meet?");
    let choices = [
      ["whatsapp", "WhatsApp meeting"],
      ["messenger", "Facebook Messenger meeting"],
    ];
    for (let [value, words] of choices) {
      function choice_pick() {
        via = value;
        problems_recheck();
        via_draw();
      }
      if (equal(via, value)) {
        app_shared_button_green(via_area, "✓ " + words, choice_pick);
      } else {
        app_shared_button_uncolored(via_area, words, choice_pick);
      }
    }
  }
  via_draw();
  let weekly_row = app_shared_field(card);
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
  ('A press of Book with something missing scrolls to the part that needs it and rings it in red, says what is missing in red, and gives Book a thick red edge; all of it comes off as soon as that part is filled in (human: "should it scroll up to the offending field and circle it in red until satsifies check?").');
  ("Rejected: a red box around the whole form (it says something is wrong without saying where); greying Book until the form is complete (a guest pressing a grey button learns nothing about why).");
  function form_problem() {
    if (equal(chosen, null)) {
      let r2 = {
        field: pick_field,
        words: "Pick a time first.",
      };
      return r2;
    }
    if (equal(via, null)) {
      let r3 = {
        field: via_area,
        words: "Pick WhatsApp or Messenger first.",
      };
      return r3;
    }
    let left = html_value_get(name).trim();
    if (equal(left, "")) {
      let r4 = {
        field: name_field,
        words: "Type your name.",
      };
      return r4;
    }
    if (equal(via, "whatsapp") && equal(html_value_get(whatsapp).trim(), "")) {
      let r5 = {
        field: number_box,
        words: "Type your WhatsApp number.",
      };
      return r5;
    }
    if (equal(via, "messenger") && equal(html_value_get(profile).trim(), "")) {
      let r6 = {
        field: profile_box,
        words: "Paste the link to your Facebook profile.",
      };
      return r6;
    }
    return null;
  }
  function problem_show(problem) {
    problem_clear();
    marked = problem;
    app_shared_problem_mark(problem.field, true);
    html_text_content_set(status, problem.words);
    html_style_assign(status, {
      color: app_shared_color_red(),
    });
    html_style_assign(book_button, {
      border: "4px solid " + app_shared_color_red(),
    });
    html_component_element_get(problem.field).scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
  function problem_clear() {
    if (equal(marked, null)) {
      return;
    }
    app_shared_problem_mark(marked.field, false);
    marked = null;
    html_text_content_set(status, "");
    html_style_assign(status, {
      color: "",
    });
    html_style_assign(book_button, {
      border: "",
    });
  }
  function problems_recheck() {
    if (equal(marked, null)) {
      return;
    }
    let problem = form_problem();
    if (equal(problem, null) || not(equal(problem.words, marked.words))) {
      problem_clear();
    }
  }
  for (let input of [name, whatsapp, profile]) {
    html_component_element_get(input).addEventListener(
      "input",
      problems_recheck,
    );
  }
  async function lambda2() {
    let problem = form_problem();
    let b3 = equal(problem, null);
    if (not(b3)) {
      problem_show(problem);
      return;
    }
    problem_clear();
    let name_text = html_value_get(name).trim();
    let token = check.token();
    if (equal(token, "")) {
      html_text_content_set(status, "Wait for the check above to finish.");
      return;
    }
    html_text_content_set(status, "Booking...");
    html_style_assign(status, {
      color: "",
    });
    ('The shared loading cover sits over the page while the booking goes through (human: "maybe while booking show loading?"), so a second press can\'t send it twice.');
    async function book_send() {
      let r = await calendar_api_call("POST", "book", book_body, key);
      return r;
    }
    let book_body = {
      turnstile: token,
      host: slug,
      name: name_text,
      whatsapp: html_value_get(whatsapp),
      profile: html_value_get(profile),
      timezone: zone,
      day: chosen.day,
      start_minute: chosen.start_minute,
      weekly: weekly_element.checked,
      via,
    };
    let booked = await html_loading(book_send);
    html_text_content_set(status, "");
    check.reset();
    if (not(booked.body.ok)) {
      let words = {
        whatsapp: "That WhatsApp number does not look right.",
        profile: "Paste the link to your Facebook profile.",
        messenger:
          "This host does not take Messenger calls now. Pick WhatsApp.",
        taken: "Someone just booked that time. Pick another.",
        not_open: "That time is no longer open. Pick another.",
        limit:
          "You already have the most upcoming meetings this host allows. To book another time, cancel one first.",
        rate: "Too many tries. Wait a minute and try again.",
        turnstile: "The check failed. Try again.",
        network: "No connection. Try again.",
      };
      let text = property_get_or(
        words,
        booked.body.reason,
        "Could not book. Try again.",
      );
      ("A refusal that names a part of the form rings that part the same way; the rest are said in red with nothing ringed.");
      let fields = {
        whatsapp: number_box,
        profile: profile_box,
        taken: pick_field,
        not_open: pick_field,
      };
      let field = property_get_or(fields, booked.body.reason, null);
      let b4 = equal(field, null);
      if (not(b4)) {
        problem_show({
          field,
          words: text,
        });
        return;
      }
      html_text_content_set(status, text);
      html_style_assign(status, {
        color: app_shared_color_red(),
      });
      return;
    }
    storage_local_set(app_calendar, "guest_details", {
      name: name_text,
      whatsapp: html_value_get(whatsapp),
      profile: html_value_get(profile),
      via,
    });
    if (booked.body.key) {
      key = booked.body.key;
      on_key(key);
    }
    ('The emptied booking card is hidden, not just cleared - cleared, it stayed on screen as a small empty green box above the result (human: "a little green container at the top").');
    html_clear(card);
    html_component_element_get(card).style.display = "none";
    html_clear(after);
    let done = app_shared_container(after);
    ('The time is a request until the host confirms the code, so the line says so (human: "Instead of saying booked, say: Unconfirmed request:").');
    let booked_line = html_div_text_content(
      done,
      "Unconfirmed request: " +
        calendar_time_range_local_text(
          booked.body.start_utc,
          host.meeting_minutes,
        ),
    );
    html_style_assign(booked_line, {
      "font-size": "1.3em",
      "font-weight": "bold",
    });
    ("The steps are the human's own wording, numbered; the host speaks as \"me\" because the page is the host's own booking link.");
    let app_name = equal(via, "messenger") ? "Messenger" : "WhatsApp";
    html_div_text(done, "Next steps:");
    html_div_text(done, "1. Copy this code:");
    html_div_text_content(done, booked.body.code);
    async function code_copy() {
      await clipboard_copy_browser(booked.body.code);
      app_shared_toast("✅ Copied code");
    }
    app_shared_button_uncolored(done, "Copy code", code_copy);
    html_div_text(done, "2. Send this code to me on " + app_name + ":");
    html_a_href_text_new_tab(done, booked.body.send_url, "Open " + app_name);
    html_div_text(done, "3. I will send you a confirmation message.");
    let final_hint = html_div_text(
      done,
      "The meeting is not final until you get a confirmation message from me on " +
        app_name +
        ".",
    );
    app_shared_text_deemphasized(final_hint);
    let expires = html_div_text_content(
      done,
      "If the code has not arrived by " +
        calendar_time_local_text(booked.body.expires_utc) +
        ", the booking is cancelled.",
    );
    app_shared_text_deemphasized(expires);
    html_div_text(
      done,
      "4. To change or cancel this meeting, or to book another, use this link. Please save it:",
    );
    let link = html_url_without_hash() + "#host=" + slug + ",key=" + key;
    ("The link opens in a new tab, so this page with the code to send stays open behind it.");
    let link_line = html_div(done);
    html_a_href_text_new_tab(link_line, link, link);
    async function link_copy() {
      await clipboard_copy_browser(link);
      app_shared_toast("✅ Copied link");
    }
    app_shared_button_uncolored(done, "Copy link", link_copy);
  }
  let book_button = app_shared_button_green(card, "Book", lambda2);
}
