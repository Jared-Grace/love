import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container } from "./app_shared_container.mjs";
import { calendar_api_call } from "./calendar_api_call.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { calendar_host_window } from "./calendar_host_window.mjs";
import { app_shared_heading_big } from "./app_shared_heading_big.mjs";
import { app_shared_heading } from "./app_shared_heading.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { app_calendar } from "./app_calendar.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { html_div_text_content } from "./html_div_text_content.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_button_back_text } from "./app_shared_button_back_text.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_shared_button_green } from "./app_shared_button_green.mjs";
import { app_calendar_share_link_draw } from "./app_calendar_share_link_draw.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { list_map } from "./list_map.mjs";
import { app_shared_choice_cards } from "./app_shared_choice_cards.mjs";
import { app_calendar_guest_proof_waiting } from "./app_calendar_guest_proof_waiting.mjs";
import { list_filter } from "./list_filter.mjs";
import { app_calendar_guest_proof_form } from "./app_calendar_guest_proof_form.mjs";
import { calendar_slots_by_month } from "./calendar_slots_by_month.mjs";
import { app_shared_unavailable_box } from "./app_shared_unavailable_box.mjs";
import { calendar_days_by_weekday } from "./calendar_days_by_weekday.mjs";
import { app_shared_field } from "./app_shared_field.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_button_back_arrow } from "./app_shared_button_back_arrow.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_component_element_get } from "./html_component_element_get.mjs";
import { calendar_weekly_series_plan } from "./calendar_weekly_series_plan.mjs";
import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { multiply } from "./multiply.mjs";
import { app_shared_problem_mark } from "./app_shared_problem_mark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_loading } from "./html_loading.mjs";
import { calendar_time_range_local_text } from "./calendar_time_range_local_text.mjs";
import { app_calendar_private_link_draw } from "./app_calendar_private_link_draw.mjs";
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
  ('The card\'s name is its biggest line, above the meeting length (human, 2026-11-25: "top main card has book a meeting be more prominent").');
  app_shared_heading_big(card, "Book a meeting with " + host.name);
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
  function proof_for(v) {
    function is_v(p) {
      let r9 = equal(p.via, v);
      return r9;
    }
    let r8 = guest_proofs.find(is_v) || null;
    return r8;
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
  ('★ ONE CHOICE AT A TIME (human, 2026-11-25: "the screen would clear and you would have one choice at a time"): step holds one screen - which app, then the code form or the times - and each press clears it and draws the next, with ← Back to the one before. First comes which app, each saying whether booking is open now or a code comes first (human: "whatsapp (book now) / Messenger (need to confirm before booking)"). A host without Messenger has one app, so that screen is skipped.');
  let step = html_div(card);
  function back_button(box) {
    'Back wears the words and arrow every app\'s way out wears (human, 2026-11-25: "can Back button be DRY with other back buttons? same emoji?"), kept in the calendar\'s plain button dress so it sits like the buttons beside it.';
    let text2 = app_shared_button_back_text();
    app_shared_button_uncolored(box, text2, apps_show);
  }
  function apps_show() {
    html_clear(step);
    ('THE MAIN CHOICES ARE ACTIONS (human, 2026-11-25: "Book meeting on WhatsApp / Confirm your Messenger / Change your WA# / Share this website with someone else ... would be the main choices"): each app says what can be done on it now - book, send the code already asked for, or confirm first - then a change for each app already confirmed, then sharing. Host sign in stays its own section under the card.');
    ('A host with no open time says so at the top of the first screen (human, 2026-11-25: "on the main page, it should say if completely booked/no dates available"), so nobody presses Book only to learn it there. Confirming an app still works: the guest is ready when times open.');
    if (equal(free.body.slots.length, 0)) {
      let none_line = html_div_text(
        step,
        "No times are open in the next " +
          booking_window.days_ahead +
          " days - all booked or closed. Please check back later.",
      );
      html_style_assign(none_line, {
        "font-weight": "bold",
        "margin-bottom": "0.6em",
      });
    }
    let vias = host.messenger ? ["whatsapp", "messenger"] : ["whatsapp"];
    ('BOTH APPS CONFIRMED ⇒ ONE BOOK BUTTON (human, 2026-11-25: "if both are confirmed then it has book meeting button and then they choose which later?"); which app is then its own screen. With one app confirmed, its Book button names it and that screen is skipped.');
    let proven_vias = vias.filter(via_proven);
    let both = greater_than(proven_vias.length, 1);
    if (both) {
      app_shared_button_green(step, "Book a meeting", meet_on_show);
    }
    for (let v of vias) {
      let p = proof_for(v);
      if (both && p && p.proven) {
        continue;
      }
      let label = app_label(v);
      ('MESSENGER NAMES WHAT IS CONFIRMED (human, 2026-11-25: "Confirm your Facebook profile to meet on Messenger" ... "instead of \\"Send your FB MSG code\\""): before the guest is proven, code sent or not, the button says it is the profile being checked and what for. WhatsApp keeps its words.');
      let unproven_words = equal(v, "messenger")
        ? "Confirm your Facebook profile to meet on Messenger"
        : p
          ? "Send your " + label + " code"
          : "Confirm your " + label;
      let words = p && p.proven ? "Book a meeting on " + label : unproven_words;
      async function pick() {
        await app_show(v);
      }
      if (p && p.proven) {
        app_shared_button_green(step, words, pick);
      } else {
        app_shared_button_uncolored(step, words, pick);
      }
    }
    for (let v of vias) {
      let p = proof_for(v);
      if (not(p && p.proven)) {
        continue;
      }
      async function change() {
        await form_show(v);
      }
      app_shared_button_uncolored(
        step,
        equal(v, "messenger")
          ? "Change your Facebook profile"
          : "Change your WhatsApp number",
        change,
      );
    }
    function share_show() {
      html_clear(step);
      app_calendar_share_link_draw(step, slug);
      back_button(step);
    }
    app_shared_button_uncolored(
      step,
      "Share this page with someone else",
      share_show,
    );
  }
  function via_proven(v) {
    let p = proof_for(v);
    let r12 = Boolean(p) && Boolean(p.proven);
    return r12;
  }
  ("times_back is where Back on the first day screen goes: the app screen when the guest came through it, else the main choices.");
  let times_back = apps_show;
  function meet_on_show() {
    html_clear(step);
    app_shared_field_title(step, "Which app do you want to meet on?");
    back_button(step);
    function card_of(v) {
      let p = proof_for(v);
      let r10 = {
        key: v,
        title: [
          {
            text: app_label(v),
            bold: true,
          },
        ],
        details: equal(v, "messenger") ? p.profile_given : p.whatsapp,
        disabled: false,
      };
      return r10;
    }
    let vias = host.messenger ? ["whatsapp", "messenger"] : ["whatsapp"];
    let list3 = vias.filter(via_proven);
    let cards = list_map(list3, card_of);
    function meet_on_choose(v) {
      via_choose(v);
      proof = proof_for(v);
      times_back = meet_on_show;
      times_start();
    }
    app_shared_choice_cards(step, cards, null, meet_on_choose);
  }
  async function app_show(v) {
    times_back = apps_show;
    via_choose(v);
    let p = proof_for(v);
    if (equal(p, null)) {
      await form_show(v);
      return;
    }
    if (not(p.proven)) {
      waiting_show(p);
      return;
    }
    proof = p;
    times_start();
  }
  ("After a code is asked for or confirmed the page is drawn again from the server; it opens on the app the guest was on, not back on the app choice, so nothing is asked twice.");
  async function redraw_on(v) {
    storage_local_set(app_calendar, "guest_resume", v);
    await redraw();
  }
  function waiting_show(p) {
    html_clear(step);
    async function change() {
      await form_show(p.via);
    }
    async function check() {
      await redraw_on(p.via);
    }
    app_calendar_guest_proof_waiting(step, slug, key, p, change, check);
    back_button(step);
  }
  async function form_show(v) {
    html_clear(step);
    let list2 = list_filter(guest_proofs, proof_is_proven);
    let proven_vias = list_map(list2, proof_via);
    async function started() {
      await redraw_on(v);
    }
    await app_calendar_guest_proof_form(
      step,
      slug,
      host,
      key,
      key_keep,
      started,
      proven_vias,
      v,
    );
    ('A guest can leave the form unchanged (human, 2026-11-25: "if change wa# should be able to go back or cancel").');
    back_button(step);
  }
  function proof_is_proven(p) {
    let r10 = p.proven;
    return r10;
  }
  function proof_via(p) {
    let r11 = p.via;
    return r11;
  }
  let resume = storage_local_get(app_calendar, "guest_resume");
  storage_local_set(app_calendar, "guest_resume", null);
  if (resume) {
    await app_show(resume);
    return;
  }
  apps_show();
  return;
  function times_start() {
    html_clear(step);
    let slots = free.body.slots;
    if (equal(slots.length, 0)) {
      html_div_text(
        step,
        "No open hours in the next " + booking_window.days_ahead + " days.",
      );
      back_button(step);
      return;
    }
    ("A time is picked in steps: first a day of the week or, when the open hours reach into more than one month, a month; then a date; then a time. Each step has a Back button to the one before.");
    ("Rejected: month only (a guest free only on Saturdays must open every date to find them); weekday only (a guest planning a set week thinks in dates).");
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
      let line = app_shared_unavailable_box(
        list,
        words + " unavailable" + tail,
      );
      return line;
    }
    let weekdays = calendar_days_by_weekday(months);
    let chosen = null;
    ("marked is the problem now ringed in red, or null. It is declared here, above every button, because a press can land while the spam check below is still loading, and a name declared after that wait does not exist yet - picking an app then threw and drew nothing.");
    let marked = null;
    ('The prompt and its buttons sit in one field, spaced off from what follows like the host\'s fields (human: "Pick a day of the week and its buttons should look like a group").');
    let pick_field = app_shared_field(step);
    let chosen_line = html_div_text(pick_field, "");
    ('The picked date and time stand out larger than the prompts before it (human: "choosen date/time should be larger font").');
    function chosen_line_set(words, big) {
      html_text_content_set(chosen_line, words);
      html_style_assign(chosen_line, {
        "font-size": big ? "1.3em" : "",
        "font-weight": big ? "bold" : "",
      });
    }
    ('No scroll box: each screen holds one short list, and a box scrolling inside the page hid where one choice ended and the next began (human, 2026-11-25: "container below with scroll but it includes pick month - this isn\'t correct?").');
    let list = html_div(pick_field);
    function screen_start(words, back) {
      chosen = null;
      final_set(false);
      html_clear(list);
      chosen_line_set(words, false);
      if (equal(back, null)) {
        let text5 = app_shared_button_back_text();
        app_shared_button_uncolored(list, text5, times_back);
      } else {
        let text3 = app_shared_button_back_text();
        app_shared_button_uncolored(list, text3, back);
      }
      html_div(list);
    }
    function first_show() {
      'WEEKDAY OR MONTH IS ITS OWN SCREEN (human, 2026-11-25: "should it be two buttons: I want to choose a day of the week / I want to choose a month?"), overriding the earlier rejection of "a first screen asking which way to browse": one choice per screen now outranks one press saved. With the open hours inside one month there is no month to pick, so the weekdays come at once.';
      let b5 = greater_than(months.length, 1);
      if (not(b5)) {
        weekdays_show();
        return;
      }
      ('Worded by the human (2026-11-25: "What day do you want to meet?").');
      screen_start("What day do you want to meet?", null);
      app_shared_button_uncolored(
        list,
        "Choose a day of the week",
        weekdays_show,
      );
      app_shared_button_uncolored(list, "Choose a month", months_show);
    }
    function weekdays_show() {
      screen_start(
        "Pick a day of the week:",
        greater_than(months.length, 1) ? first_show : null,
      );
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
            back: weekdays_show,
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
    }
    function months_show() {
      screen_start("Pick a month:", first_show);
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
            back: months_show,
          });
        }
        app_shared_button_uncolored(list, month.label, month_pick);
      }
    }
    function days_show(group) {
      screen_start("Pick a date - " + group.label + ":", group.back);
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
      function day_back() {
        days_show(group);
      }
      screen_start("Pick a time on " + day.label + ":", day_back);
      for (let time of day.times) {
        function time_pick() {
          chosen = time.slot;
          weekly_chosen = false;
          problems_recheck();
          html_clear(list);
          chosen_line_set("Chosen: " + day.label + ", " + time.label, true);
          function time_back() {
            times_show(group, day);
          }
          let left = app_shared_button_back_arrow();
          let text4 = text_combine(left, " Change time");
          app_shared_button_uncolored(list, text4, time_back);
          repeat_draw(day, time);
          final_set(true);
        }
        app_shared_button_uncolored(list, time.label, time_pick);
      }
    }
    ("The last screen - where the meeting will be, repeat weekly, and Book - shows only once a time is picked, so each screen asks one thing.");
    let final_area = html_div(step);
    function final_set(shown) {
      html_component_element_get(final_area).style.display = shown
        ? ""
        : "none";
    }
    ('★ HOW OFTEN IS ASKED AS BIG CHOICE CARDS, the karate app\'s radio cards (human, 2026-11-25: "radio button for every week: Meet ... only / Meet every week Monday at ..."). Which app to meet on is its own screen before the days, and only when both apps are confirmed (human: "should wa/msg be its own screen as choice?").');
    ("Rejected: a tick box for every week (human named it first, then offered the pair); the pair says both answers in full, so the reader sees exactly what each one books.");
    ("The proven guest is told where the meeting will be, in the number or link the host proved, so a wrong one is seen before booking; changing it is on the first screen, and means a new code.");
    let who_field = app_shared_field(final_area);
    html_div_text(
      who_field,
      "✅ " +
        (equal(proof.via, "messenger")
          ? "We meet on Facebook Messenger"
          : "We meet on WhatsApp: " + proof.whatsapp),
    );
    ("weekly_chosen is false until the reader picks the every-week card; picking a new time puts it back to once, since the every-week card may be shut at the new time.");
    let weekly_chosen = false;
    let weekly_row = app_shared_field(final_area);
    function repeat_draw(day, time) {
      html_clear(weekly_row);
      app_shared_field_title(weekly_row, "How often");
      let clashes = property_get_or(chosen, "weekly_clashes", []);
      ('Every week was first shut when anything was booked at this time on a later week; now only a meeting that itself repeats shuts it (see the plan below). The sentence still names what is in the way: a meeting that itself repeats takes every week from its date, a single one takes its date (human: "this should not be selectable if someone else has already booked every week at this time starting at a future week").');
      function clash_text(c) {
        let when = new Date(c.start_utc).toLocaleDateString(undefined, {
          weekday: "short",
          month: "short",
          day: "numeric",
        });
        let r11 = c.weekly ? "every week from " + when : when;
        return r11;
      }
      ('The taken weeks are skipped, not the card shut (human, 2026-11-25: "These mondays will be scheduled: ... And then every week beginning on ..."), by the plan the server books from. With nothing taken the card says only what it gives (human: "or if it\'s open, then don\'t need to explain"); the weeks it cannot give go on a line of their own in dark red (human: "I am not available to meet on these Mondays at ... (and different color or style so it\'s clear unavailable)").');
      let plan = calendar_weekly_series_plan(chosen.day, clashes);
      ("A host day is drawn as the guest's own date by moving the chosen meeting's moment on by whole days; across a clock change that is an hour off, which moves the date only for a meeting within an hour of midnight.");
      function week_text(d) {
        let left2 = Date.parse(d);
        let right = Date.parse(chosen.day);
        let top = subtract(left2, right);
        let days = divide(top, 86400000);
        let at = new Date(
          Date.parse(chosen.start_utc) + multiply(days, 86400000),
        );
        let r12 = at.toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        });
        return r12;
      }
      function weekly_clash(c) {
        let r13 = c.weekly;
        return r13;
      }
      let weekday_plural = day.weekday + "s";
      let every_details = "The same time every week, until you cancel.";
      let unavailable = "";
      if (not(plan.open)) {
        let theirs = clashes.find(weekly_clash);
        every_details = "Not available.";
        unavailable =
          "I am not available to meet every " +
          day.weekday +
          " at " +
          time.label +
          " from " +
          clash_text({
            start_utc: theirs.start_utc,
            weekly: false,
          }) +
          ".";
      } else if (greater_than(plan.taken.length, 0)) {
        every_details =
          "These " +
          weekday_plural +
          " will be scheduled: " +
          list_map(plan.singles, week_text).join(", ") +
          ". And then every week beginning on " +
          week_text(plan.weekly_from) +
          ".";
        unavailable =
          "I am not available to meet on these " +
          weekday_plural +
          " at " +
          time.label +
          ": " +
          list_map(plan.taken, week_text).join(", ") +
          ".";
      }
      let shut = not(plan.open);
      let cards = [
        {
          key: "once",
          title: [
            {
              text: "Meet ",
              bold: false,
            },
            {
              text: day.label,
              bold: true,
            },
            {
              text: " at ",
              bold: false,
            },
            {
              text: time.label,
              bold: true,
            },
            {
              text: " only",
              bold: true,
            },
          ],
          details: "Just this one meeting.",
          disabled: false,
        },
        {
          key: "weekly",
          title: [
            {
              text: "Meet ",
              bold: false,
            },
            {
              text: "every " + day.weekday,
              bold: true,
            },
            {
              text: " at ",
              bold: false,
            },
            {
              text: time.label,
              bold: true,
            },
          ],
          details: every_details,
          unavailable,
          disabled: shut,
        },
      ];
      function repeat_choose(k) {
        weekly_chosen = equal(k, "weekly");
        repeat_draw(day, time);
      }
      app_shared_choice_cards(
        weekly_row,
        cards,
        weekly_chosen ? "weekly" : "once",
        repeat_choose,
      );
    }
    ("No spam check here: only a guest the host has proven can book, and the server refuses everyone else.");
    let status = html_div_text(final_area, "");
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
        weekly: weekly_chosen,
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
      let app_name = equal(proof.via, "messenger") ? "Messenger" : "WhatsApp";
      let weekly_booked = weekly_chosen;
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
        ('IF GOD WILLS (human, 2026-11-26: "Booked... I will meet you / Can it say / If God wills I will meet you"), as the proof form already says "if God wills you can schedule a meeting".');
        html_div_text(
          done,
          "If God wills, I will meet you on " +
            app_name +
            (weekly_booked ? " at this time every week." : " at this time."),
        );
        html_div_text(
          done,
          "To change or cancel this meeting, or to book another, use your private link.",
        );
        app_calendar_private_link_draw(done, slug, key);
      }
      await on_booked(draw_done);
    }
    let book_button = app_shared_button_green(final_area, "Book", lambda2);
    first_show();
  }
}
