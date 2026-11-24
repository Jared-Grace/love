import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_host_window } from "./calendar_host_window.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_calendar_guest_proof_form } from "./app_calendar_guest_proof_form.mjs";
import { app_calendar_guest_proof_waiting } from "./app_calendar_guest_proof_waiting.mjs";
import { calendar_slots_by_month } from "./calendar_slots_by_month.mjs";
import { app_shared_unavailable_box } from "./app_shared_unavailable_box.mjs";
import { calendar_days_by_weekday } from "./calendar_days_by_weekday.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_loading } from "./html_loading.mjs";
import { calendar_time_range_local_text } from "./calendar_time_range_local_text.mjs";
import { calendar_guest_link } from "./calendar_guest_link.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_calendar_link_copy_button } from "./app_calendar_link_copy_button.mjs";
export async function app_calendar_guest(parent, slug, key, on_key, on_booked) {
  arguments_assert(arguments, 5);
  ("on_booked(draw) runs once a booking is written; draw(box) draws what was booked and the guest's link into box. The page draws it at its top and goes back to its home screen, the guest's meetings with the hours under them (human, 2026-11-24: \"when booked meeting should take back to home screen that says your meetings but the info should be at the top\").");
  ("The booking screen a guest reaches from a host's link (#host=<slug>): first how to reach them and a code to send the host, then - once the host has seen the code arrive - the host's open hours in the guest's own clock and a Book that is final at once.");
  ("key is the guest's session key, or null. The first code answers a new key, handed to on_key so the page keeps it; the guest never signs in.");
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
  let booking_window = calendar_host_window(host);
  html_div_text_content(card, "Book a meeting with " + host.name);
  let zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  ('The length stands out on its own line, as big as a heading (human: "What about making the 25 minutes stand out more visually?").');
  app_shared_heading(card, host.meeting_minutes + " minutes (or less)");
  ('★ A GUEST MAY BE PROVEN ON BOTH APPS (human, 2026-11-24: "it should allow multiple communications as confirmed"). The page meets on the app they chose last on this device, when they have asked to be proven on it; otherwise on the one they asked for last. A server from before the list existed answers only proof, the newest.');
  let guest_proofs = property_get_or(
    free.body,
    "guest_proofs",
    free.body.proof ? [free.body.proof] : [],
  );
  let details = storage_local_get(app_calendar, "guest_details");
  function via_is_chosen(p) {
    let r6 = Boolean(details) && equal(p.via, details.via);
    return r6;
  }
  let proof = guest_proofs.find(via_is_chosen) || guest_proofs[0] || null;
  function via_choose(v) {
    let kept = storage_local_get(app_calendar, "guest_details") || {
      name: "",
      whatsapp: "",
      profile: "",
    };
    storage_local_set(app_calendar, "guest_details", {
      ...kept,
      via: v,
    });
  }
  function app_label(v) {
    let r7 = equal(v, "messenger") ? "Facebook Messenger" : "WhatsApp";
    return r7;
  }
  function back_draw(box, via_now) {
    'While a guest waits on a code for one app, the other - if already proven - is one press away, so a guest who wants a meeting now is not held up (human, 2026-11-24: "if they want meeting immediately then there\'s a button for whatsapp instead (that goes back) and works the other way around too").';
    function other_proven(p) {
      let r8 = p.proven && not(equal(p.via, via_now));
      return r8;
    }
    let other = guest_proofs.find(other_proven);
    if (not(other)) {
      return;
    }
    async function back() {
      via_choose(other.via);
      await redraw();
    }
    app_shared_button_green(
      box,
      "Schedule " + app_label(other.via) + " meeting now - no code needed",
      back,
    );
  }
  function app_where_text() {
    'Both apps are named only while both are still a choice; a guest who has proved one is told just that one (human, 2026-11-24: "should it always say that or just what theyve configured/confirmed?").';
    let proved = proof;
    if (proved) {
      let r4 = equal(proved.via, "messenger")
        ? "On Messenger."
        : "On WhatsApp.";
      return r4;
    }
    let r5 = host.messenger ? "On WhatsApp or Messenger." : "On WhatsApp.";
    return r5;
  }
  let zone_line = html_div_text_content(
    card,
    app_where_text() + " Times are in your time zone: " + zone,
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
  ("★ PROVE FIRST, THEN BOOK (human, 2026-11-20). A guest the host has not yet proven sees no times at all: first the form asking how to reach them, then the code to send. Only a proven guest sees the times, and their Book is final at once - no booking is only a request.");
  async function redraw() {
    html_clear(parent);
    let r3 = await app_calendar_guest(parent, slug, key, on_key, on_booked);
    return r3;
  }
  function key_keep(k) {
    key = k;
    on_key(k);
  }
  let step = html_div(card);
  async function form_show() {
    html_clear(step);
    ("Asked from the proven screen, the times below the form are hidden: a new number needs a new code before any time can be booked.");
    let below = html_component_element_get(step).nextElementSibling;
    while (below) {
      below.style.display = "none";
      below = below.nextElementSibling;
    }
    let list2 = list_filter(guest_proofs, proof_is_proven);
    let proven_vias = list_map(list2, proof_via);
    ("A guest proven on some app has already chosen which app this code is for - the other one, or the same one with a new number - so the form asks no choice; a guest proven on nothing still picks.");
    let chosen_before = storage_local_get(app_calendar, "guest_details");
    let via_fixed =
      greater_than(proven_vias.length, 0) && chosen_before && chosen_before.via
        ? chosen_before.via
        : null;
    await app_calendar_guest_proof_form(
      step,
      slug,
      host,
      key,
      key_keep,
      redraw,
      proven_vias,
      via_fixed,
    );
    let chosen_now = storage_local_get(app_calendar, "guest_details");
    back_draw(step, chosen_now ? chosen_now.via : null);
  }
  function proof_is_proven(p) {
    let r10 = p.proven;
    return r10;
  }
  function proof_via(p) {
    let r11 = p.via;
    return r11;
  }
  async function switch_to(v) {
    'A guest proven on one app asks to meet on the other: proven there too, they meet there at once; otherwise the form asks for a code from it first, and the app already proven stays one press away (human, 2026-11-24: "a button to schedule a fb meeting but it explains they will need to confirm first").';
    via_choose(v);
    function is_v(p) {
      let r9 = equal(p.via, v);
      return r9;
    }
    if (guest_proofs.find(is_v)) {
      await redraw();
      return;
    }
    await form_show();
  }
  if (equal(proof, null)) {
    await form_show();
    return;
  }
  if (not(proof.proven)) {
    app_calendar_guest_proof_waiting(step, slug, key, proof, form_show, redraw);
    back_draw(step, proof.via);
    return;
  }
  let slots = free.body.slots;
  if (equal(slots.length, 0)) {
    html_div_text(
      card,
      "No open hours in the next " + booking_window.days_ahead + " days.",
    );
    return;
  }
  ("A time is picked in steps: first a day of the week or, when the open hours reach into more than one month, a month; then a date; then a time. Each step has a Back button to the one before.");
  ("Rejected: month only (a guest free only on Saturdays must open every date to find them); weekday only (a guest planning a set week thinks in dates); a first screen asking which way to browse (one more press for everyone).");
  ("A weekday, month or date with no open hour - closed, or fully booked - shows as text saying it is unavailable, never as a button (human: \"Instead of a button, text should say 'x is unavailable'\").");
  let now_iso = new Date().toISOString();
  let months = calendar_slots_by_month(
    slots,
    now_iso,
    booking_window.notice_hours,
    booking_window.days_ahead,
  );
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
  ("The proven guest is told where the meeting will be, in the number or link the host proved, so a wrong one is seen before booking; changing it means a new code.");
  let app_name = equal(proof.via, "messenger") ? "Messenger" : "WhatsApp";
  let who_field = app_shared_field(card);
  html_div_text(
    who_field,
    "✅ " +
      (equal(proof.via, "messenger")
        ? "We meet on Facebook Messenger"
        : "We meet on WhatsApp: " + proof.whatsapp),
  );
  app_shared_button_uncolored(
    who_field,
    equal(proof.via, "messenger")
      ? "Change my Facebook"
      : "Change my WhatsApp number",
    form_show,
  );
  if (host.messenger) {
    let via_other = equal(proof.via, "messenger") ? "whatsapp" : "messenger";
    async function switch_other() {
      await switch_to(via_other);
    }
    app_shared_button_uncolored(
      who_field,
      "Meet on " + app_label(via_other) + " instead",
      switch_other,
    );
  }
  let weekly_row = app_shared_field(card);
  let weekly = html_input_type(weekly_row, "checkbox");
  let weekly_element = html_component_element_get(weekly);
  let weekly_label = html_div_text(
    weekly_row,
    "Repeat every week at this time",
  );
  html_component_element_get(weekly_label).style.display = "inline";
  ("No spam check here: only a guest the host has proven can book, and the server refuses everyone else.");
  let status = html_div_text(card, "");
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
  async function lambda2() {
    let problem = form_problem();
    let b3 = equal(problem, null);
    if (not(b3)) {
      problem_show(problem);
      return;
    }
    problem_clear();
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
      host: slug,
      timezone: zone,
      day: chosen.day,
      start_minute: chosen.start_minute,
      weekly: weekly_element.checked,
      via: proof.via,
    };
    let booked = await html_loading(book_send);
    html_text_content_set(status, "");
    if (not(booked.body.ok)) {
      let words = {
        unproven:
          "I have not seen your code yet. Open this page again to send it.",
        taken: "Someone just booked that time. Pick another.",
        not_open: "That time is no longer open. Pick another.",
        limit:
          "You already have the most upcoming meetings this host allows. To book another time, cancel one first.",
        rate: "Too many tries. Wait a minute and try again.",
        network: "No connection. Try again.",
      };
      let text = property_get_or(
        words,
        booked.body.reason,
        "Could not book. Try again.",
      );
      ("A refusal that names a part of the form rings that part the same way; the rest are said in red with nothing ringed.");
      let fields = {
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
    let weekly_chosen = weekly_element.checked;
    function draw_done(box) {
      let done = app_shared_container(box);
      ("The guest was proven before booking, so the meeting is final the moment it is written, and the page says so plainly: booked.");
      let booked_line = html_div_text_content(
        done,
        "✅ Booked: " +
          calendar_time_range_local_text(
            booked.body.start_utc,
            host.meeting_minutes,
          ) +
          " (" +
          host.meeting_minutes +
          " minutes)",
      );
      ('The length is said beside the times, not left to be worked out from them (human, 2026-11-24: "booked should say meeting length").');
      html_style_assign(booked_line, {
        "font-size": "1.3em",
        "font-weight": "bold",
      });
      html_div_text(
        done,
        "I will meet you on " +
          app_name +
          (weekly_chosen ? " at this time every week." : " at this time."),
      );
      html_div_text(
        done,
        "To change or cancel this meeting, or to book another, use this link. Please save it:",
      );
      let link = calendar_guest_link(slug, key);
      let link_line = html_div(done);
      html_a_href_text_new_tab(link_line, link, link);
      app_calendar_link_copy_button(done, link);
    }
    await on_booked(draw_done);
  }
  let book_button = app_shared_button_green(card, "Book", lambda2);
}
